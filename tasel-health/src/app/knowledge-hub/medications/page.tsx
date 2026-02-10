import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Pill, Clock, Award, BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'Psychiatric Medication Resources | Tasel Health Knowledge Hub',
  description: 'Complete medication guides: antidepressants, mood stabilizers, ADHD medications, safety monitoring, and side effect management.',
  keywords: ['psychiatric medication guide', 'antidepressant information', 'medication management resources'],
}

export default function MedicationsHubPage() {
  const articles = [
    {title: "Antidepressants Explained", slug: "antidepressants-explained", description: "SSRIs, SNRIs, bupropion, and how they work", readTime: 16, featured: true},
    {title: "Starting Medication Guide", slug: "starting-medication-first-weeks", description: "Week-by-week timeline for first 4-8 weeks", readTime: 13, featured: true},
    {title: "Managing Side Effects", slug: "managing-medication-side-effects", description: "Practical solutions for common medication side effects", readTime: 14, featured: false},
    {title: "Mood Stabilizers Guide", slug: "mood-stabilizers-guide", description: "Lithium, lamotrigine, valproate monitoring & safety", readTime: 13, featured: false},
    {title: "ADHD Medications", slug: "adhd-medications-guide", description: "Stimulants, non-stimulants, and prescribing requirements", readTime: 13, featured: false},
    {title: "Sleep Meds vs. CBT-I", slug: "sleep-medications-vs-cbt-i", description: "Comparing medication and behavioral approaches to insomnia", readTime: 12, featured: false},
    {title: "Medication & Pregnancy", slug: "medication-pregnancy-planning", description: "Safety considerations and shared decision-making", readTime: 14, featured: false},
    {title: "Controlled Substance Policy", slug: "controlled-substance-policy-guide", description: "Requirements for stimulants and benzodiazepines", readTime: 11, featured: false},
    {title: "Medication Monitoring & Labs", slug: "medication-monitoring-lab-tests", description: "Why monitoring matters and what to expect", readTime: 10, featured: false}
  ]

  const featuredArticles = articles.filter(a => a.featured)

  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/medical-pattern.svg')] opacity-5"></div>
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
              <Pill className="h-6 w-6 text-white mr-2" />
              <span className="text-white font-medium">Medications Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Psychiatric Medication Guide
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Evidence-based information about psychiatric medications: how they work, what to expect, and how to use them safely.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>9 Articles</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>115 Minutes</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <Award className="h-4 w-4 mr-2" />
                <span>Psychiatrist Reviewed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Medication Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <Badge className="mb-4 bg-blue-600 text-white text-sm px-3 py-1">Featured Guide</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex items-center text-sm text-gray-500"><Clock className="h-4 w-4 mr-1" />{article.readTime} min read</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Medication Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Badge className="mb-3 bg-blue-100 text-blue-700"><Clock className="h-3 w-3 mr-1" />{article.readTime} min</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Questions About Medication Management?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our psychiatry team is here to help you find the right medication approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-teal-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </Link>
            <Link href="/services/psychiatry" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-lg font-semibold transition-colors">
              Our Psychiatry Services
            </Link>
          </div>
        </div>
      </section>

      <StillHaveQuestions />
    </main>
  )
}
