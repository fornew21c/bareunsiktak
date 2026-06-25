/**
 * Prefix a public asset path with the deploy base path.
 * GitHub Pages serves project sites under /<repo>, so plain <img src="/...">
 * needs the base path prepended (Next.js only auto-prefixes next/image & Link).
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE}${path}`;
}
