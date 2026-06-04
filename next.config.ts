import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // /about → out/about/index.html (vs out/about.html). Required so the
  // Apache rewrites on Hostinger can serve clean URLs without trailing .html.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
