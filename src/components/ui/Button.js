'use client';

import AppLink from './AppLink';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white transform hover:scale-105',
    secondary: 'bg-white dark:bg-dark-200 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-dark-300',
    accent: 'bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-600 hover:to-primary-600 text-white transform hover:scale-105',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-500 hover:text-white',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-dark-300 text-gray-700 dark:text-gray-200',
  };

  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-5',
    lg: 'text-lg py-2.5 px-6',
    xl: 'text-xl py-3 px-8',
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <AppLink href={href} className={styles} {...props}>
        {children}
      </AppLink>
    );
  }

  return (
    <button className={styles} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
