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

  // For internal links, use Next.js Link component which will handle the basePath
  // The basePath is already configured in next.config.mjs
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
