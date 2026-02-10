/** @type {import('next').NextConfig} */

// GitHub Pages deployment: set base path to repo name
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const basePath = isGitHubPages ? '/tasel-health-review' : ''

const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  
  // Base path for GitHub Pages (repo name)
  basePath,
  assetPrefix: isGitHubPages ? '/tasel-health-review/' : '',
  
  // Expose basePath to client components for image paths
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  
  eslint: {
    // Allow production builds to succeed even if ESLint finds issues in content pages
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'logo.clearbit.com'],
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Required for static export
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
