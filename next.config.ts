import type { NextConfig } from "next";

// Set by the deploy workflow (e.g. "/bareunsiktak" for GitHub Pages project sites).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages.
  output: "export",
  basePath: basePath || undefined,
  images: {
    // GitHub Pages has no image optimization server.
    unoptimized: true,
  },
  // Emit /path/index.html so deep links resolve on static hosts.
  trailingSlash: true,
};

export default nextConfig;
