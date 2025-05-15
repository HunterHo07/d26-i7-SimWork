'use client';

import Image from 'next/image';
import AppLink from '@/components/ui/AppLink';
import { getImagePath } from '@/lib/utils';

export default function Logo({ className = '' }) {
  return (
    <AppLink href="/" className={`block ${className}`}>
      <Image
        src={getImagePath('/images/simwork-logo.svg')}
        alt="SimWork Logo"
        width={200}
        height={60}
        priority
        className="h-auto w-auto"
      />
    </AppLink>
  );
}
