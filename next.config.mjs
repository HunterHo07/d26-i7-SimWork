/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Vercel deployment, we don't need output: 'export'
  images: {
    domains: ['vercel.com'],
  },
  // Remove GitHub Pages specific configuration
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
