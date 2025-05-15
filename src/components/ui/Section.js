'use client';

export default function Section({
  children,
  className = '',
  id,
  bgColor = 'bg-white dark:bg-dark-400',
  py = 'py-16 md:py-24',
  ...props
}) {
  return (
    <section
      id={id}
      className={`${bgColor} ${py} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
