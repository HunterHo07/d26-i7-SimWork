/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
