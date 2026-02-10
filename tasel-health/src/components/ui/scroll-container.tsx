'use client'

import { ReactNode } from 'react'

interface ScrollContainerProps {
  children: ReactNode
  variant: 'purple' | 'blue' | 'teal' | 'amber' | 'violet'
}

export function ScrollContainer({ children, variant }: ScrollContainerProps) {
  const colorSchemes = {
    purple: { parchment: 'from-amber-50 via-yellow-50 to-amber-50', accent: '#7C3AED', wood: '#8B4513' },
    blue: { parchment: 'from-blue-50 via-sky-50 to-blue-50', accent: '#2563EB', wood: '#654321' },
    teal: { parchment: 'from-teal-50 via-cyan-50 to-teal-50', accent: '#14B8A6', wood: '#6B5D4F' },
    amber: { parchment: 'from-amber-50 via-yellow-50 to-orange-50', accent: '#F59E0B', wood: '#A0522D' },
    violet: { parchment: 'from-violet-50 via-fuchsia-50 to-violet-50', accent: '#7C3AED', wood: '#5B3A6F' }
  }

  const colors = colorSchemes[variant]

  return (
    <div className="relative my-8 md:my-12">
      {/* TOP LEFT SCROLL HANDLE */}
      <div className="absolute -top-4 md:-top-6 left-2 sm:left-4 md:left-8 z-20 w-8 md:w-10">
        <svg width="40" height="60" viewBox="0 0 40 60" className="w-full h-auto">
          {/* Wooden rod */}
          <rect x="15" y="0" width="10" height="50" fill={colors.wood} rx="5"/>
          <rect x="15" y="0" width="10" height="50" fill="url(#woodGrain)" opacity="0.3" rx="5"/>
          {/* Top knob */}
          <circle cx="20" cy="8" r="8" fill={colors.wood}/>
          <circle cx="20" cy="8" r="8" fill="url(#knobShine)" opacity="0.4"/>
          <circle cx="18" cy="6" r="2" fill="white" opacity="0.6"/>
          {/* Bottom knob */}
          <circle cx="20" cy="52" r="8" fill={colors.wood}/>
          <circle cx="20" cy="52" r="8" fill="url(#knobShine)" opacity="0.4"/>
          <circle cx="18" cy="50" r="2" fill="white" opacity="0.6"/>
          <defs>
            <linearGradient id="woodGrain" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="#000" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#000" stopOpacity="0.2"/>
            </linearGradient>
            <radialGradient id="knobShine">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* TOP RIGHT SCROLL HANDLE */}
      <div className="absolute -top-4 md:-top-6 right-2 sm:right-4 md:right-8 z-20 w-8 md:w-10">
        <svg width="40" height="60" viewBox="0 0 40 60" className="w-full h-auto">
          <rect x="15" y="0" width="10" height="50" fill={colors.wood} rx="5"/>
          <rect x="15" y="0" width="10" height="50" fill="url(#woodGrain)" opacity="0.3" rx="5"/>
          <circle cx="20" cy="8" r="8" fill={colors.wood}/>
          <circle cx="20" cy="8" r="8" fill="url(#knobShine)" opacity="0.4"/>
          <circle cx="18" cy="6" r="2" fill="white" opacity="0.6"/>
          <circle cx="20" cy="52" r="8" fill={colors.wood}/>
          <circle cx="20" cy="52" r="8" fill="url(#knobShine)" opacity="0.4"/>
          <circle cx="18" cy="50" r="2" fill="white" opacity="0.6"/>
        </svg>
      </div>

      {/* BOTTOM LEFT SCROLL HANDLE */}
      <div className="absolute -bottom-4 md:-bottom-6 left-2 sm:left-4 md:left-8 z-20 w-8 md:w-10">
        <svg width="40" height="60" viewBox="0 0 40 60" className="w-full h-auto">
          <rect x="15" y="10" width="10" height="50" fill={colors.wood} rx="5"/>
          <rect x="15" y="10" width="10" height="50" fill="url(#woodGrain)" opacity="0.3" rx="5"/>
          <circle cx="20" cy="8" r="8" fill={colors.wood}/>
          <circle cx="20" cy="8" r="8" fill="url(#knobShine)" opacity="0.4"/>
          <circle cx="18" cy="6" r="2" fill="white" opacity="0.6"/>
          <circle cx="20" cy="52" r="8" fill={colors.wood}/>
          <circle cx="20" cy="52" r="8" fill="url(#knobShine)" opacity="0.4"/>
          <circle cx="18" cy="50" r="2" fill="white" opacity="0.6"/>
        </svg>
      </div>

      {/* BOTTOM RIGHT SCROLL HANDLE */}
      <div className="absolute -bottom-4 md:-bottom-6 right-2 sm:right-4 md:right-8 z-20 w-8 md:w-10">
        <svg width="40" height="60" viewBox="0 0 40 60" className="w-full h-auto">
          <rect x="15" y="10" width="10" height="50" fill={colors.wood} rx="5"/>
          <rect x="15" y="10" width="10" height="50" fill="url(#woodGrain)" opacity="0.3" rx="5"/>
          <circle cx="20" cy="8" r="8" fill={colors.wood}/>
          <circle cx="20" cy="8" r="8" fill="url(#knobShine)" opacity="0.4"/>
          <circle cx="18" cy="6" r="2" fill="white" opacity="0.6"/>
          <circle cx="20" cy="52" r="8" fill={colors.wood}/>
          <circle cx="20" cy="52" r="8" fill="url(#knobShine)" opacity="0.4"/>
          <circle cx="18" cy="50" r="2" fill="white" opacity="0.6"/>
        </svg>
      </div>

      {/* PARCHMENT SCROLL */}
      <div className={`
        relative
        bg-gradient-to-br ${colors.parchment}
        rounded-xl md:rounded-2xl
        shadow-xl md:shadow-2xl
        border-2 sm:border-3 md:border-4 border-amber-200/50
        overflow-hidden
        mx-4 sm:mx-8 md:mx-12 lg:mx-16
      `}>
        {/* Aged parchment texture */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        {/* Subtle edge wear effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-800/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-800/10 to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-amber-800/10 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-amber-800/10 to-transparent" />
        </div>

        {/* Rolled edge shadows - left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-gradient-to-r from-amber-900/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-gradient-to-l from-amber-900/20 to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}