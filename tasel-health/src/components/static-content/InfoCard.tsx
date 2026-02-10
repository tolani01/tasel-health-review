'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface InfoCardProps {
  title: string
  description?: string
  content: React.ReactNode | string
  icon?: React.ComponentType<{ className?: string }>
  image?: string
  stats?: {
    label: string
    value: string
    highlight?: boolean
  }[]
  ctaText?: string
  ctaAction?: () => void
  className?: string
  variant?: 'default' | 'gradient' | 'outline' | 'glass'
}

export function InfoCard({
  title,
  description,
  content,
  icon: Icon,
  image,
  stats,
  ctaText,
  ctaAction,
  className,
  variant = 'default'
}: InfoCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-purple-50 to-teal-50 border-0'
      case 'outline':
        return 'border-2 hover:border-purple-600 transition-colors'
      case 'glass':
        return 'bg-white/80 backdrop-blur-sm border-white/20'
      default:
        return 'bg-white'
    }
  }

  return (
    <Card className={cn(
      'overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in',
      getVariantClasses(),
      className
    )}>
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-3">
              {Icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-teal-100">
                  <Icon className="h-5 w-5 text-purple-600" />
                </div>
              )}
              <span className="text-xl font-bold text-gray-900">{title}</span>
            </CardTitle>
            {description && (
              <CardDescription className="mt-2 text-gray-600">
                {description}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Main Content */}
        <div className="text-gray-700">
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            content
          )}
        </div>

        {/* Statistics */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={cn(
                  'text-center',
                  stat.highlight && 'bg-gradient-to-r from-purple-100 to-teal-100 rounded-lg p-2'
                )}
              >
                <div className={cn(
                  'text-2xl font-bold',
                  stat.highlight ? 'text-purple-600' : 'text-gray-900'
                )}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        {ctaText && (
          <div className="pt-4">
            <Button
              variant="outline"
              className="w-full group hover:bg-purple-600 hover:text-white transition-all"
              onClick={ctaAction}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
