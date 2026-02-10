import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Lightbulb, Clock, Award, BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'Mental Health Skills & Self-Help Resources | Tasel Health',
  description: 'Practical mental health tools: breathing techniques, sleep improvement, stress management, anxiety relief, and mindfulness practices.',
  keywords: ['mental health skills', 'self-help techniques', 'coping strategies', 'anxiety relief', 'stress management'],
}

export default function SkillsHubPage() {
  const articles = [
    {title: "5-Minute Calm: Breathing & Grounding", slug: "5-minute-calm-breathing-grounding", description: "Quick anxiety relief techniques you can use anywhere", readTime: 9, featured: true},
    {title: "Sleep Better: CBT-I Guide", slug: "sleep-better-cbt-i-guide", description: "Improve sleep naturally with behavioral strategies", readTime: 12, featured: true},
    {title: "Behavioral Activation", slug: "behavioral-activation-depression", description: "Move through depression with activity scheduling", readTime: 11, featured: false},
    {title: "Exposure Ladders", slug: "exposure-ladders-anxiety", description: "Face anxiety step-by-step systematically", readTime: 12, featured: false},
    {title: "Managing Anxiety Symptoms", slug: "managing-anxiety-symptoms", description: "Comprehensive guide to anxiety management", readTime: 13, featured: false},
    {title: "Stress Management", slug: "stress-management-techniques", description: "Daily stress reduction strategies", readTime: 10, featured: false},
    {title: "Mindfulness & Meditation", slug: "mindfulness-meditation-basics", description: "Meditation basics for mental health", readTime: 10, featured: false}
  ]

  const featuredArticles = articles.filter(a => a.featured)

  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-amber-700 via-orange-700 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
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
              <Lightbulb className="h-6 w-6 text-white mr-2" />
              <span className="text-white font-medium">Skills & Self-Help Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Practical Mental Health Tools
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Evidence-based techniques you can use today: breathing, sleep, stress management, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center"><BookOpen className="h-4 w-4 mr-2" /><span>7 Articles</span></div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center"><Clock className="h-4 w-4 mr-2" /><span>77 Minutes</span></div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center"><Award className="h-4 w-4 mr-2" /><span>Clinically Reviewed</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Here: Quick Relief Techniques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <Badge className="mb-4 bg-amber-600 text-white text-sm px-3 py-1">Featured Guide</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">{article.title}</h3>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Skills Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Badge className="mb-3 bg-amber-100 text-amber-700"><Clock className="h-3 w-3 mr-1" />{article.readTime} min</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Professional Support?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">While these skills are helpful, professional treatment addresses underlying conditions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-amber-900 hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold transition-colors">Get Professional Help</Link>
            <Link href="/knowledge-hub" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-lg font-semibold transition-colors">Back to Knowledge Hub</Link>
          </div>
        </div>
      </section>

      <StillHaveQuestions />
    </main>
  )
}
