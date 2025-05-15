'use client';

export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
  ...props
}) {
  return (
    <div
      className={`p-6 rounded-xl bg-white dark:bg-dark-200 shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
      {...props}
    >
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
