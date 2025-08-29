/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = 'personal-page'

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
}
