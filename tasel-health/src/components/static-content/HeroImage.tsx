'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useConsultation } from '@/contexts/consultation-context'

interface HeroImageProps {
  src: string
  alt: string
  overlayContent: {
    title: string
    subtitle: string
    keyPoints?: string[]
    ctaText?: string
    ctaAction?: () => void
  }
  animationType?: 'fade-in' | 'slide-up' | 'scale-in'
  priority?: boolean
  className?: string
  textPosition?: 'left' | 'right' | 'center' | 'bottom'
}

export function HeroImage({
  src,
  alt,
  overlayContent,
  animationType = 'fade-in',
  priority = false,
  className,
  textPosition = 'left'
}: HeroImageProps) {
  const { showForm } = useConsultation()

  const getTextPositionClasses = () => {
    switch (textPosition) {
      case 'left':
        return 'left-0 top-1/2 -translate-y-1/2 text-left pl-8 md:pl-16'
      case 'right':
        return 'right-0 top-1/2 -translate-y-1/2 text-right pr-8 md:pr-16'
      case 'center':
        return 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
      case 'bottom':
        return 'bottom-0 left-0 right-0 text-center pb-8 md:pb-16'
      default:
        return 'left-0 top-1/2 -translate-y-1/2 text-left pl-8 md:pl-16'
    }
  }

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade-in':
        return 'animate-fade-in'
      case 'slide-up':
        return 'animate-slide-up'
      case 'scale-in':
        return 'animate-scale-in'
      default:
        return 'animate-fade-in'
    }
  }

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={90}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Overlay Content */}
      <div className={cn(
        'absolute z-10 max-w-2xl',
        getTextPositionClasses(),
        getAnimationClass()
      )}>
        <div className="space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {overlayContent.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200">
            {overlayContent.subtitle}
          </p>

          {overlayContent.keyPoints && (
            <ul className="space-y-3">
              {overlayContent.keyPoints.map((point, index) => (
                <li 
                  key={index}
                  className="flex items-center space-x-3 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          )}

          {overlayContent.ctaText && (
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white animate-pulse-subtle"
              onClick={overlayContent.ctaAction || (() => showForm('', 'hero'))}
            >
              {overlayContent.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
