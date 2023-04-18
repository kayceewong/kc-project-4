const { withPlaiceholder } = require('@plaiceholder/next')
const { i18n } = require('./next-i18next.config')

const nextConfig = withPlaiceholder({
  reactStrictMode: true,
  images: {
    domains: ['media.rawg.io']
  },
  i18n
})

module.exports = nextConfig
