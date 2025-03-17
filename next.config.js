/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AUTH_TRUST_HOST: '127.0.0.1:3000',
  },
  experimental: {
    instrumentCode: true,
  },
}

module.exports = nextConfig
