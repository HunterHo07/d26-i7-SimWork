'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src="/images/simwork-logo.svg"
        alt="SimWork Logo"
        width={200}
        height={60}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}
