const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
   reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost:3000'],
  },
})


