import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Brain, Clock, Award, BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'TMS Therapy Resources & Education | Tasel Health Knowledge Hub',
  description: 'Comprehensive TMS therapy education: how it works, who it helps, treatment timeline, safety, and clinical evidence.',
  keywords: ['TMS therapy resources', 'TMS education', 'brain stimulation information', 'TMS Oklahoma City'],
}

export default function TMSHubPage() {
  const articles = [
    {title: "TMS 101: What to Expect", slug: "tms-101-what-to-expect", description: "Complete guide to TMS therapy: how it works, who it helps, safety, outcomes", readTime: 12, featured: true},
    {title: "TMS vs. Medication", slug: "tms-vs-medication", description: "Side-by-side comparison of TMS and antidepressants", readTime: 14, featured: true},
    {title: "Week-by-Week TMS Journey", slug: "tms-journey-week-by-week", description: "Detailed timeline from first session through maintenance", readTime: 15, featured: false},
    {title: "TMS for Depression: Evidence", slug: "tms-for-depression-evidence", description: "Clinical trials, success rates, and research overview", readTime: 13, featured: false},
    {title: "TMS for OCD", slug: "tms-for-ocd", description: "FDA-cleared treatment for obsessive-compulsive disorder", readTime: 12, featured: false},
    {title: "TMS Side Effects & Safety", slug: "tms-side-effects-safety", description: "Comprehensive safety guide and side effect management", readTime: 11, featured: false},
    {title: "TMS for Anxious Depression", slug: "tms-anxious-depression", description: "Treatment for depression with anxiety symptoms", readTime: 10, featured: false}
  ]

  const featuredArticles = articles.filter(a => a.featured)
  const allArticles = articles

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/neural-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Back to Main Hub Button */}
          <div className="mb-8">
            <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10" asChild>
              <Link href="/knowledge-hub">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Knowledge Hub
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Brain className="h-6 w-6 text-white mr-2" />
              <span className="text-white font-medium">TMS Therapy Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything You Need to Know About TMS
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Evidence-based guides to brain stimulation therapy: how it works, who it helps, and what to expect from treatment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>7 Articles</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>85 Minutes</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <Award className="h-4 w-4 mr-2" />
                <span>Clinically Reviewed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Here: Essential TMS Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <Badge className="mb-4 bg-purple-600 text-white text-sm px-3 py-1">
                    Featured Guide
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
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

      {/* All Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete TMS Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Badge className="mb-3 bg-purple-100 text-purple-700">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime} min
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore TMS Therapy?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss whether TMS is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-900 hover:bg-teal-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </Link>
            <Link href="/services/tms-therapy" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-lg font-semibold transition-colors">
              Learn About Our TMS Services
            </Link>
          </div>
        </div>
      </section>

      <StillHaveQuestions />
    </main>
  )
}
