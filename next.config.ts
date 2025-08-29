import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const repo = 'personal-page'

const config: NextConfig = {

  output: 'export',

  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',

  images: { unoptimized: true },

  trailingSlash: true,
}

export default config
