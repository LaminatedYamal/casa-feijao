// src/utils/paths.ts

/**
 * Returns the base path configured in Astro (e.g. '/casa-feijao' or '').
 * Always returns with NO trailing slash.
 */
const rawBase = import.meta.env.BASE_URL || '/';
export const BASE_PATH = rawBase.replace(/\/$/, '');

/**
 * Prepend the base path to an internal URL.
 * Handles root '/', subpaths, query strings, and hashes.
 * Leaves external links, anchors, tel:, mailto: untouched.
 */
export function url(path: string): string {
  if (!path) return BASE_PATH ? `${BASE_PATH}/` : '/';

  // Do not touch external links, tel, mailto, or pure hash links (#section)
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path;
  }

  // Already prefixed with BASE_PATH
  if (BASE_PATH && (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`))) {
    return path;
  }

  // Format with leading slash
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}
