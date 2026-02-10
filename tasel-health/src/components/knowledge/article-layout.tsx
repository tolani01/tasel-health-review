'use client'

import { ReactNode } from 'react'
import { Clock, Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ArticleLayoutProps {
  title: string
  summary: string
  estimatedReadTime: number
  lastReviewed: string
  author: string
  clinicalReviewer: string
  tags: string[]
  children: ReactNode
}

export function ArticleLayout({
  title,
  summary,
  estimatedReadTime,
  lastReviewed,
  author,
  clinicalReviewer,
  tags,
  children
}: ArticleLayoutProps) {
  const handleBack = () => {
    // Use browser history to go back
    if (window.history.length > 1) {
      window.history.back()
    } else {
      // Fallback to main knowledge hub if no history
      window.location.href = '/knowledge-hub'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="pt-32 sm:pt-36 md:pt-40 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="max-w-4xl mx-auto mb-6 md:mb-8">
            <Button 
              variant="ghost" 
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 text-sm md:text-base"
              onClick={handleBack}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Previous Page
            </Button>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8">
              {summary}
            </p>
            
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 pb-4 md:pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{estimatedReadTime} min read</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Reviewed {lastReviewed}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
            </div>
            
            {/* Clinical Review Badge */}
            <div className="mt-4 p-3 md:p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <p className="text-xs sm:text-sm text-teal-900">
                <strong>Clinically Reviewed:</strong> {clinicalReviewer} | 
                <span className="ml-2">Next Review: {new Date(new Date(lastReviewed).setFullYear(new Date(lastReviewed).getFullYear() + 1)).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </p>
            </div>
            
            {/* Tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-gray-500" />
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>
          
          {/* Article Content */}
          <div className="max-w-4xl mx-auto prose prose-sm sm:prose-base md:prose-lg prose-purple">
            {children}
          </div>
        </div>
      </article>
      
      {/* Crisis Resources Box - Bottom of Article */}
      <div className="bg-gradient-to-br from-red-50 via-pink-50 to-red-50 py-8 md:py-12 border-t-4 border-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Red Alert Box */}
            <div className="bg-red-600 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl md:shadow-2xl mb-6">
              <div className="text-center text-white mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full mb-3 md:mb-4">
                  <svg className="h-6 w-6 md:h-8 md:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 md:mb-3">In a Mental Health Crisis?</h3>
                <p className="text-base sm:text-lg opacity-95 max-w-2xl mx-auto px-4">
                  If you're in immediate danger or thinking about hurting yourself, please get help right away:
                </p>
              </div>

              {/* Crisis Buttons - 3 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {/* 911 Card */}
                <a 
                  href="tel:911" 
                  className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-red-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-red-200 transition-colors">
                    <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-red-600 mb-2">911</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">Emergency</div>
                  <p className="text-xs text-gray-600">Life-threatening situations</p>
                </a>

                {/* 988 Card */}
                <a 
                  href="tel:988" 
                  className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-red-600 mb-2">988</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">Crisis Lifeline</div>
                  <p className="text-xs text-gray-600">24/7 suicide prevention</p>
                </a>

                {/* Crisis Text Card */}
                <a 
                  href="sms:741741&body=HELLO" 
                  className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">Text HELLO</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">to 741741</div>
                  <p className="text-xs text-gray-600">Crisis Text Line</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Medical Disclaimer */}
      <div className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Medical Disclaimer:</strong> This information is for educational purposes only and should not replace professional medical advice. 
              Always consult with your healthcare provider before making decisions about your treatment. 
              If you're experiencing a mental health emergency, call 911 or text/call 988 (Suicide & Crisis Lifeline) immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
