/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export so API routes can run on Vercel’s serverless runtime
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // allow default optimization (works fine on Vercel)
    remotePatterns: [],
  },
  // no `output: 'export'` here
};

export default nextConfig;
