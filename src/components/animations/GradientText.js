'use client';

export default function GradientText({
  children,
  className = '',
  gradient = 'from-primary-500 via-secondary-500 to-accent-500',
  ...props
}) {
  return (
    <span
      className={`bg-gradient-to-r ${gradient} inline-block text-transparent bg-clip-text animate-text-gradient ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
