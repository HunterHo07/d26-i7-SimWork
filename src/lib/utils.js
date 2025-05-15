'use client';

import { usePathname } from 'next/navigation';

export function useBasePath() {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '';
  return basePath;
}

export function getImagePath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '';
  return `${basePath}${path}`;
}
