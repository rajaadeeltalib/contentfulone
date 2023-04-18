
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "1g59yh9r4kc9",
    CONTENTFUL_ACCESS_KEY: "vKSKh8sCqhd9M--o7kvfa1E76Q5-T8ZCzUqL6u8SoO4"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig