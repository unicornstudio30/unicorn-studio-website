#!/usr/bin/env node
/**
 * Post-build: for every page in out/ that has an index.html, emit a
 * Markdown twin at the same path (e.g. out/about/index.md). AI agents
 * and LLM crawlers (Perplexity, ChatGPT search, Claude web search,
 * etc.) prefer Markdown because it's smaller and semantically cleaner
 * than rendered HTML.
 *
 * What gets stripped:
 *   - <nav>, <footer>, <script>, <style>, <noscript>
 *   - elements with class containing "reveal" before they're shown
 *   - all SVG icons (kept as text content if they have aria-label)
 *
 * What gets kept:
 *   - <main> if present, otherwise <body>
 *   - heading hierarchy, paragraphs, lists, links
 *   - alt text on images
 */

import { readFileSync, writeFileSync, statSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import TurndownService from "turndown";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "out");

async function findHtmlFiles(dir) {
  const out = [];
  async function walk(d) {
    const entries = await readdir(d, { withFileTypes: true });
    for (const e of entries) {
      const p = join(d, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.isFile() && e.name === "index.html") out.push(p);
    }
  }
  await walk(dir);
  return out;
}

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "_",
  linkStyle: "inlined",
});

// Drop attribute-only / decorative SVGs — they bloat the markdown with nothing.
turndown.addRule("strip-svg", {
  filter: ["svg"],
  replacement: () => "",
});
// Strip iframes (Cal.com embeds etc. — not useful in markdown).
turndown.addRule("strip-iframe", {
  filter: ["iframe"],
  replacement: () => "",
});

function htmlToMarkdown(html, sourcePath) {
  const $ = cheerio.load(html);

  // Page metadata for the front matter.
  const title = $("title").text().trim();
  const desc = $('meta[name="description"]').attr("content")?.trim() || "";
  const canonical = $('link[rel="canonical"]').attr("href") || "";

  // Remove things we never want in the markdown twin.
  $("nav, footer, script, style, noscript, link, meta").remove();
  // Pure-decoration utility classes used by the site.
  $(".animate-pulse, .animate-ping, .animate-core-float, .animate-core-glow, .animate-core-shine").remove();
  // The fixed top nav lives outside <main>; just to be safe.
  $("[class*='backdrop-blur']").has("a[href='/']").remove();

  // Prefer <main>, fall back to <body>.
  const root = $("main").length ? $("main") : $("body");
  const body = turndown.turndown(root.html() || "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const front = [
    "---",
    `title: ${JSON.stringify(title)}`,
    desc ? `description: ${JSON.stringify(desc)}` : null,
    canonical ? `canonical: ${canonical}` : null,
    `source: ${relative(OUT, sourcePath).split("/").slice(0, -1).join("/") || "/"}`,
    "---",
  ].filter(Boolean).join("\n");

  return `${front}\n\n${body}\n`;
}

async function main() {
  try {
    statSync(OUT);
  } catch {
    console.error(`out/ not found at ${OUT}. Run npm run build first.`);
    process.exit(1);
  }

  const files = await findHtmlFiles(OUT);
  let written = 0;
  for (const f of files) {
    try {
      const html = readFileSync(f, "utf8");
      const md = htmlToMarkdown(html, f);
      const target = f.replace(/index\.html$/, "index.md");
      writeFileSync(target, md, "utf8");
      written++;
    } catch (e) {
      console.warn(`× ${f}: ${e.message}`);
    }
  }
  console.log(`Wrote ${written} markdown twins.`);
}

main();
