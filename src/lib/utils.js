'use client';

import { usePathname } from 'next/navigation';

export function useBasePath() {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '';
  return basePath;
}

export function getImagePath(path) {
  // The basePath is already configured in next.config.mjs
  // Just ensure the path starts with a slash
  return path.startsWith('/') ? path : `/${path}`;
}
