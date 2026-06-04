#!/usr/bin/env bash
#
# Build the Next.js site (static export → out/) and upload it to
# Hostinger over (S)FTP using lftp's `mirror` command.
#
# Setup (one time):
#   1. brew install lftp
#   2. Copy .env.example → .env.local and fill in the HOSTINGER_* vars.
#   3. chmod +x scripts/deploy-hostinger.sh
#
# Use:
#   ./scripts/deploy-hostinger.sh           # full build + upload
#   ./scripts/deploy-hostinger.sh --no-build  # upload existing out/ (faster)
#   ./scripts/deploy-hostinger.sh --dry-run   # show what would change, upload nothing
#
# The script refuses to run if any HOSTINGER_* variable is missing or
# if the working tree is dirty (unless --allow-dirty is passed).
#

set -euo pipefail

# Resolve project root (the dir containing this script's parent).
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

DO_BUILD=1
DRY_RUN=0
ALLOW_DIRTY=0

for arg in "$@"; do
  case "$arg" in
    --no-build)    DO_BUILD=0 ;;
    --dry-run)     DRY_RUN=1 ;;
    --allow-dirty) ALLOW_DIRTY=1 ;;
    -h|--help)
      sed -n '2,20p' "${BASH_SOURCE[0]}"
      exit 0
      ;;
    *)
      echo "Unknown flag: $arg" >&2
      exit 2
      ;;
  esac
done

bold()  { printf "\033[1m%s\033[0m\n" "$*"; }
ok()    { printf "\033[32m✓\033[0m %s\n" "$*"; }
warn()  { printf "\033[33m!\033[0m %s\n" "$*"; }
fail()  { printf "\033[31m✗\033[0m %s\n" "$*" >&2; exit 1; }

# --- Pre-flight: tools ------------------------------------------------------

command -v lftp >/dev/null 2>&1 \
  || fail "lftp is not installed. Run: brew install lftp"

command -v node >/dev/null 2>&1 \
  || fail "node is not installed."

# --- Pre-flight: credentials ------------------------------------------------
# On CI (GitHub Actions), vars come from the runner environment / secrets and
# there is no .env.local. Locally, source .env.local if it exists. If neither
# the env nor .env.local has the vars, fail with a clear message.

if [[ -f .env.local ]]; then
  # shellcheck disable=SC1091
  set -a; source .env.local; set +a
fi

missing=()
[[ -z "${HOSTINGER_FTP_HOST:-}" ]]     && missing+=(HOSTINGER_FTP_HOST)
[[ -z "${HOSTINGER_FTP_USER:-}" ]]     && missing+=(HOSTINGER_FTP_USER)
[[ -z "${HOSTINGER_FTP_PASSWORD:-}" ]] && missing+=(HOSTINGER_FTP_PASSWORD)
if (( ${#missing[@]} > 0 )); then
  fail "Missing Hostinger credentials: ${missing[*]}. Set them in .env.local (local) or as GitHub Secrets (CI)."
fi

HOSTINGER_FTP_PORT="${HOSTINGER_FTP_PORT:-21}"
HOSTINGER_REMOTE_PATH="${HOSTINGER_REMOTE_PATH:-/public_html}"
HOSTINGER_PROTOCOL="${HOSTINGER_PROTOCOL:-ftp}"  # ftp | sftp | ftps

# --- Pre-flight: clean working tree (best-effort) --------------------------
# Skip when running on GitHub Actions — actions/checkout always provides a
# clean tree, and any apparent "diff" there is line-ending / file-mode noise
# from the runner's checkout, not actual developer edits.

if [[ $ALLOW_DIRTY -eq 0 ]] && [[ -z "${GITHUB_ACTIONS:-}" ]] && ! git diff-index --quiet HEAD --; then
  warn "Working tree has uncommitted changes."
  warn "Pass --allow-dirty to deploy anyway. Aborting."
  exit 1
fi

# --- Build (skippable) ------------------------------------------------------

if [[ $DO_BUILD -eq 1 ]]; then
  bold "Building site"
  npm run build
  ok "Built out/"
else
  [[ -d out ]] || fail "--no-build given but ./out does not exist. Run a build first."
  warn "Skipping build, using existing out/"
fi

# .htaccess for clean URLs + SPA-style routing on Apache shared hosting.
# Generated only if not present in out/ already.
if [[ ! -f out/.htaccess ]]; then
  cat > out/.htaccess <<'HTACCESS'
# Hostinger shared hosting — Apache rewrite rules
Options -MultiViews
RewriteEngine On

# Serve /foo as /foo/index.html (Next.js static export style)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^.]+[^/])$ $1/ [L,R=301]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.+)/$ $1/index.html [L]

# Long cache for hashed Next.js assets
<FilesMatch "\.(js|css|woff2|woff|ttf|otf|svg|png|jpg|jpeg|webp|avif|ico)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
HTACCESS
  ok "Wrote out/.htaccess (rewrite + cache rules)"
fi

# --- Upload -----------------------------------------------------------------

bold "Uploading to ${HOSTINGER_PROTOCOL}://${HOSTINGER_FTP_HOST}:${HOSTINGER_FTP_PORT}${HOSTINGER_REMOTE_PATH}"

LFTP_MIRROR_OPTS=(
  --reverse                       # local → remote
  --delete                        # delete remote files no longer in out/
  --parallel=4                    # 4 concurrent uploads
  --verbose=1
  --exclude-glob='.git*'
  --exclude-glob='*.map'
  --exclude-glob='.DS_Store'
)
if [[ $DRY_RUN -eq 1 ]]; then
  LFTP_MIRROR_OPTS+=(--dry-run)
  warn "Dry run — no files will be transferred."
fi

# lftp opens an interactive-ish session; we drive it via -e
lftp -u "${HOSTINGER_FTP_USER},${HOSTINGER_FTP_PASSWORD}" \
     -p "${HOSTINGER_FTP_PORT}" \
     "${HOSTINGER_PROTOCOL}://${HOSTINGER_FTP_HOST}" \
     -e "set ftp:ssl-allow yes;
         set ftp:ssl-force ${HOSTINGER_FTP_SSL_FORCE:-no};
         set ssl:verify-certificate no;
         set net:max-retries 3;
         set net:reconnect-interval-base 5;
         mirror ${LFTP_MIRROR_OPTS[*]} ./out/ ${HOSTINGER_REMOTE_PATH};
         bye"

ok "Deploy complete."

if [[ $DRY_RUN -eq 0 ]]; then
  REMOTE_URL="${HOSTINGER_PUBLIC_URL:-https://${HOSTINGER_FTP_HOST}}"
  echo ""
  echo "Verify: $REMOTE_URL"
fi
