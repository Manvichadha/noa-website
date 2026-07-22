/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  async headers() {
    return [
      {
        // Block indexing on Vercel preview deployments (*.vercel.app)
        // but allow indexing on production (bleukei.com)
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value:
              process.env.VERCEL_ENV === 'preview' ? 'noindex' : 'index, follow',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
