import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sparkles, Clock, Award, BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import { KETAMINE_ARTICLES, KETAMINE_ARTICLES_TOTAL_READ_TIME } from '@/data/knowledge-hub-ketamine-articles'

export const metadata: Metadata = {
  title: 'Spravato® & Ketamine Resources | Tasel Health Knowledge Hub',
  description: 'Evidence-based guides to Spravato® (esketamine) and IV ketamine for treatment-resistant depression and acute suicidal ideation. Oklahoma City.',
  keywords: ['Ketamine', 'Spravato', 'esketamine', 'treatment-resistant depression', 'TRD', 'IV ketamine', 'Spravato resources', 'ketamine therapy Oklahoma City'],
}

export default function KetamineHubPage() {
  const featuredArticles = KETAMINE_ARTICLES.filter(a => a.featured)
  const allArticles = KETAMINE_ARTICLES

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-violet-900 via-fuchsia-800 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/neural-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Back to Main Hub Button */}
          <div className="mb-8">
            <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10" asChild>
              <Link href="/knowledge-hub" className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Knowledge Hub
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Sparkles className="h-6 w-6 text-white mr-2" />
              <span className="text-white font-medium">Spravato® & Ketamine Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything You Need to Know About Spravato® & Ketamine Treatment
            </h1>
            <p className="text-xl text-violet-100 mb-8">
              Evidence-based guides to Spravato® and IV ketamine: who they help, what to expect, safety, and how they compare to other treatments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>7 Articles</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>~{KETAMINE_ARTICLES_TOTAL_READ_TIME} Minutes</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <Award className="h-4 w-4 mr-2" />
                <span>Clinically Reviewed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis strip - mandatory */}
      <section className="py-3 px-4 bg-red-600 text-white text-center">
        <p className="text-sm md:text-base">
          If you or someone you know is in crisis, call or text{' '}
          <a href="tel:988" className="underline font-semibold hover:no-underline">988</a>
          {' '}(Suicide & Crisis Lifeline).
        </p>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-fuchsia-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Here: Essential Spravato® & Ketamine Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 rounded-xl">
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <Badge className="mb-4 bg-violet-600 text-white text-sm px-3 py-1">
                    Featured Guide
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime} min read
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Ketamine Library */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Spravato® & Ketamine Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 rounded-lg">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Badge className="mb-3 bg-violet-100 text-violet-700">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime} min
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-fuchsia-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Spravato® & Ketamine?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss whether Spravato® or IV ketamine is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-violet-900 hover:bg-violet-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </Link>
            <Link href="/services/spravato-ketamine" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-lg font-semibold transition-colors">
              Learn About Our Spravato® & Ketamine Services
            </Link>
          </div>
        </div>
      </section>

      <StillHaveQuestions />
    </main>
  )
}
