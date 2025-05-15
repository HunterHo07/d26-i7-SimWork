'use client';

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  ...props
}) {
  return (
    <div
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      {...props}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl ${centered ? 'mx-auto' : ''} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
