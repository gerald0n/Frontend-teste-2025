import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evob-dev-upload.s3.amazonaws.com',
      },
    ],
  },
}

export default nextConfig
