/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'd26-i7-SimWork';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '', // Removed trailing slash to avoid double slashes
  trailingSlash: true,
  // Ensure static assets are properly handled
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
