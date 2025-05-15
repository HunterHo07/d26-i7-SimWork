/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Vercel deployment, we don't need output: 'export'
  images: {
    domains: ['vercel.com', 'randomuser.me'],
    unoptimized: true,
  },
  // Ensure CSS is properly loaded
  webpack: (config) => {
    return config;
  },
  // Ensure PostCSS is properly configured
  postcss: true,
};

export default nextConfig;
