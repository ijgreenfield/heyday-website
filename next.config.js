/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: { appDir: true},
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true}
    return config
  },
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.shopify.com"
    ]
  }
}

module.exports = nextConfig
