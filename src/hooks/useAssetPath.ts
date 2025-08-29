/**
 * Returns a function that prefixes the public base path to a relative asset path.
 * Works in App Router, SSR, and static export (no router needed).
 */
export function useAssetPath() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return (p: string) => `${basePath}${p.startsWith('/') ? p : `/${p}`}`;
}


