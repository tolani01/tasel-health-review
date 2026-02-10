import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const width = parseInt(searchParams.get('w') || '1920')
  const height = parseInt(searchParams.get('h') || '1080')
  const text = searchParams.get('text') || 'Placeholder'
  const bg = searchParams.get('bg') || '9D84B7' // Tasel Health purple
  const fg = searchParams.get('fg') || 'FFFFFF'
  
  // Create SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#${bg}"/>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#${bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#4A90E2;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="${Math.min(width, height) / 10}" 
        fill="#${fg}" 
        text-anchor="middle" 
        dominant-baseline="middle"
        opacity="0.8"
      >
        ${text}
      </text>
      <text 
        x="50%" 
        y="60%" 
        font-family="Arial, sans-serif" 
        font-size="${Math.min(width, height) / 20}" 
        fill="#${fg}" 
        text-anchor="middle" 
        dominant-baseline="middle"
        opacity="0.6"
      >
        ${width}x${height}
      </text>
    </svg>
  `
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
