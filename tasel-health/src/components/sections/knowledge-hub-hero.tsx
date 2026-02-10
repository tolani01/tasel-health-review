'use client'

import { Button } from '@/components/ui/button'
import { BookOpen, Brain, Pill, MessageSquare, Lightbulb, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function KnowledgeHubHero() {
  const categories = [
    {
      icon: Pill,
      title: 'Medications',
      description: 'Psychiatric medication guides',
      href: '/knowledge-hub/medications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'TMS Therapy',
      description: 'Brain stimulation treatment',
      href: '/knowledge-hub/tms',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Sparkles,
      title: 'Ketamine',
      description: 'Spravato® & IV therapy',
      href: '/knowledge-hub/ketamine',
      color: 'from-violet-500 to-fuchsia-500'
    },
    {
      icon: MessageSquare,
      title: 'Therapy',
      description: 'Counseling & techniques',
      href: '/knowledge-hub/therapy',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Lightbulb,
      title: 'Skills & Self-Help',
      description: 'Practical tools you can use',
      href: '/knowledge-hub/skills',
      color: 'from-amber-500 to-orange-500'
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-teal-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/education-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-base font-medium mb-6">
            <BookOpen className="h-5 w-5 mr-2 text-white" />
            <span className="text-white">Mental Health Education & Resources</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
            Knowledge Hub
          </h1>
          
          <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed">
            Evidence-based guides to help you understand your treatment options 
            and take an active role in your mental health journey.
          </p>
        </div>

        {/* Category Cards - QA at 1280px and 1440px viewport */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className="group min-w-[200px] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-2xl"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-indigo-200 text-sm">
                    {category.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-indigo-200 text-lg mb-4">
            New to mental health treatment?
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-teal-50 px-8 py-6 text-lg font-semibold"
            asChild
          >
            <Link href="/knowledge-hub/getting-started-tasel-health">
              Start Here: Getting Started Guide
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
