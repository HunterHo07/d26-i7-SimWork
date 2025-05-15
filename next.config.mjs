/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'd26-i7-SimWork';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '', // Added trailing slash for asset prefix
  trailingSlash: true,
  // Ensure static assets are properly handled
  webpack: (config) => {
    return config;
  },
  // Disable image optimization to prevent issues with static export
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

export default nextConfig;
