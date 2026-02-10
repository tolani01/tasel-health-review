import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MessageSquare, Clock, Award, BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'Therapy & Counseling Resources | Tasel Health Knowledge Hub',
  description: 'Comprehensive therapy education: CBT, DBT, ACT, trauma therapy, couples counseling, and how therapy works.',
  keywords: ['therapy resources', 'counseling information', 'CBT education', 'therapy types explained'],
}

export default function TherapyHubPage() {
  const articles = [
    {title: "How Therapy Works", slug: "how-therapy-works", description: "Complete overview of the therapy process", readTime: 13, featured: true},
    {title: "CBT Explained", slug: "cbt-cognitive-behavioral-therapy", description: "Cognitive-behavioral therapy techniques and benefits", readTime: 13, featured: true},
    {title: "DBT Skills", slug: "dbt-skills-emotion-regulation", description: "Emotion regulation and distress tolerance tools", readTime: 13, featured: false},
    {title: "ACT: Values-Based Living", slug: "act-values-based-living", description: "Acceptance and commitment therapy explained", readTime: 12, featured: false},
    {title: "Trauma Therapy Approaches", slug: "trauma-therapy-approaches", description: "EMDR, prolonged exposure, CPT for PTSD", readTime: 12, featured: false},
    {title: "Couples & Family Therapy", slug: "couples-family-therapy", description: "Relationship counseling and family dynamics", readTime: 11, featured: false},
    {title: "Perinatal Mental Health", slug: "therapy-for-perinatal-mental-health", description: "Pregnancy and postpartum therapy support", readTime: 10, featured: false}
  ]

  const featuredArticles = articles.filter(a => a.featured)

  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-teal-900 via-green-800 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/therapy-pattern.svg')] opacity-5"></div>
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
              <MessageSquare className="h-6 w-6 text-white mr-2" />
              <span className="text-white font-medium">Therapy & Counseling Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Understanding Therapy & Counseling
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              Evidence-based guides to therapy approaches: CBT, DBT, ACT, trauma therapy, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center"><BookOpen className="h-4 w-4 mr-2" /><span>7 Articles</span></div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center"><Clock className="h-4 w-4 mr-2" /><span>84 Minutes</span></div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center"><Award className="h-4 w-4 mr-2" /><span>Psychologist Reviewed</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Therapy Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <Badge className="mb-4 bg-teal-600 text-white text-sm px-3 py-1">Featured Guide</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{article.title}</h3>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Therapy Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Badge className="mb-3 bg-teal-100 text-teal-700"><Clock className="h-3 w-3 mr-1" />{article.readTime} min</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Therapy?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Our licensed therapists are here to support your mental health journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-teal-900 hover:bg-cyan-50 px-8 py-4 rounded-lg font-semibold transition-colors">Schedule Consultation</Link>
            <Link href="/services/counseling" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-lg font-semibold transition-colors">Our Counseling Services</Link>
          </div>
        </div>
      </section>

      <StillHaveQuestions />
    </main>
  )
}
