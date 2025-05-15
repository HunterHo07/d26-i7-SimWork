'use client';

import { usePathname } from 'next/navigation';

// For Vercel deployment, we don't need basePath
export function getImagePath(path) {
  // Ensure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
}
