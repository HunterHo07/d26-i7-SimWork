'use client';

import { usePathname } from 'next/navigation';

export function useBasePath() {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '';
  return basePath;
}

export function getBasePath() {
  // Non-hook version for use in components that don't use hooks
  return process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '';
}

export function getImagePath(path) {
  // Add the basePath for production environment
  const basePath = getBasePath();
  // Ensure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
