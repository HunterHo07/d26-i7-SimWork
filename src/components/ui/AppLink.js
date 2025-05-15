'use client';

import Link from 'next/link';
import { getImagePath } from '@/lib/utils';

export default function AppLink({ href, children, className = '', ...props }) {
  // If the href is an external link, use it as is
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  // For internal links, prepend the basePath in production
  const basePath = process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '';
  const fullPath = `${basePath}${href}`;

  return (
    <Link href={fullPath} className={className} {...props}>
      {children}
    </Link>
  );
}
