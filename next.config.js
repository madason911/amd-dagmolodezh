/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Указываем путь к папке с app
  srcDir: './src',
}

module.exports = nextConfig