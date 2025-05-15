'use client';

import Image from 'next/image';
import AppLink from './AppLink';
import { getImagePath } from '@/lib/utils';

export default function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  className = '',
  ...props
}) {
  const CardWrapper = ({ children }) => {
    if (href) {
      return (
        <AppLink
          href={href}
          className={`block group overflow-hidden rounded-xl bg-white dark:bg-dark-200 shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
          {...props}
        >
          {children}
        </AppLink>
      );
    }

    return (
      <div
        className={`overflow-hidden rounded-xl bg-white dark:bg-dark-200 shadow-md ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };

  return (
    <CardWrapper>
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
      </div>
    </CardWrapper>
  );
}
