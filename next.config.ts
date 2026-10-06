import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // The site is a static personal page deployed to EdgeOne Pages (see esa.jsonc).
  output: 'export',
  images: {
    unoptimized: true
  }
}

export default nextConfig
