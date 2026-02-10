import { Metadata } from 'next'
import { KnowledgeHubHero } from '@/components/sections/knowledge-hub-hero'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import { ScrollContainer } from '@/components/ui/scroll-container'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Pill, MessageSquare, Lightbulb, BookOpen, Clock, TrendingUp, Sparkles } from 'lucide-react'
import { KETAMINE_ARTICLES, KETAMINE_ARTICLES_TOTAL_READ_TIME } from '@/data/knowledge-hub-ketamine-articles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Knowledge Hub - Mental Health Resources & Education | Tasel Health',
  description: 'Comprehensive mental health education: 40+ evidence-based articles about TMS therapy, medications, Spravato® & Ketamine, counseling, and wellness strategies. Oklahoma City mental health resources.',
  keywords: 'mental health education, TMS resources, depression help, anxiety support, mental wellness, Oklahoma City mental health, psychiatric medication guide, therapy information, Ketamine, Spravato',
  openGraph: {
    title: 'Knowledge Hub - Mental Health Resources & Education',
    description: '40+ evidence-based articles to help you understand treatment options and take an active role in your mental health journey.',
    type: 'website',
    images: [
      {
        url: '/images/knowledge-hub-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Mental Health Knowledge Hub',
      },
    ],
  },
}

export default function KnowledgeHubPage() {
  const tmsArticles = [
    {title: "TMS 101: What to Expect", slug: "tms-101-what-to-expect", description: "Complete guide to TMS therapy", readTime: 12},
    {title: "TMS vs. Medication", slug: "tms-vs-medication", description: "Compare treatment options", readTime: 14},
    {title: "Week-by-Week TMS Journey", slug: "tms-journey-week-by-week", description: "Detailed treatment timeline", readTime: 15},
    {title: "TMS for Depression: Evidence", slug: "tms-for-depression-evidence", description: "Clinical research & outcomes", readTime: 13},
    {title: "TMS for OCD", slug: "tms-for-ocd", description: "FDA-cleared OCD treatment", readTime: 12},
    {title: "TMS Side Effects & Safety", slug: "tms-side-effects-safety", description: "Comprehensive safety guide", readTime: 11},
    {title: "TMS for Anxious Depression", slug: "tms-anxious-depression", description: "Depression with anxiety", readTime: 10}
  ]

  const medicationArticles = [
    {title: "Antidepressants Explained", slug: "antidepressants-explained", description: "SSRIs, SNRIs & more", readTime: 16},
    {title: "Starting Medication Guide", slug: "starting-medication-first-weeks", description: "First 4-8 weeks timeline", readTime: 13},
    {title: "Managing Side Effects", slug: "managing-medication-side-effects", description: "Practical solutions", readTime: 14},
    {title: "Mood Stabilizers Guide", slug: "mood-stabilizers-guide", description: "Lithium, lamotrigine & monitoring", readTime: 13},
    {title: "ADHD Medications", slug: "adhd-medications-guide", description: "Stimulants & non-stimulants", readTime: 13},
    {title: "Sleep Meds vs. CBT-I", slug: "sleep-medications-vs-cbt-i", description: "Insomnia treatment options", readTime: 12},
    {title: "Medication & Pregnancy", slug: "medication-pregnancy-planning", description: "Safety & decision-making", readTime: 14},
    {title: "Controlled Substance Policy", slug: "controlled-substance-policy-guide", description: "Prescribing requirements", readTime: 11},
    {title: "Medication Monitoring & Labs", slug: "medication-monitoring-lab-tests", description: "Safety monitoring explained", readTime: 10}
  ]

  const therapyArticles = [
    {title: "How Therapy Works", slug: "how-therapy-works", description: "Complete therapy overview", readTime: 13},
    {title: "CBT Explained", slug: "cbt-cognitive-behavioral-therapy", description: "Cognitive-behavioral therapy", readTime: 13},
    {title: "DBT Skills", slug: "dbt-skills-emotion-regulation", description: "Emotion regulation tools", readTime: 13},
    {title: "ACT: Values-Based Living", slug: "act-values-based-living", description: "Acceptance & commitment", readTime: 12},
    {title: "Trauma Therapy Approaches", slug: "trauma-therapy-approaches", description: "EMDR, PE, CPT for PTSD", readTime: 12},
    {title: "Couples & Family Therapy", slug: "couples-family-therapy", description: "Relationship counseling", readTime: 11},
    {title: "Perinatal Mental Health", slug: "therapy-for-perinatal-mental-health", description: "Pregnancy & postpartum support", readTime: 10}
  ]

  const skillsArticles = [
    {title: "5-Minute Calm: Breathing & Grounding", slug: "5-minute-calm-breathing-grounding", description: "Quick anxiety relief", readTime: 9},
    {title: "Sleep Better: CBT-I Guide", slug: "sleep-better-cbt-i-guide", description: "Improve sleep naturally", readTime: 12},
    {title: "Behavioral Activation", slug: "behavioral-activation-depression", description: "Moving through depression", readTime: 11},
    {title: "Exposure Ladders", slug: "exposure-ladders-anxiety", description: "Facing anxiety step-by-step", readTime: 12},
    {title: "Managing Anxiety Symptoms", slug: "managing-anxiety-symptoms", description: "Comprehensive anxiety guide", readTime: 13},
    {title: "Stress Management", slug: "stress-management-techniques", description: "Daily stress reduction", readTime: 10},
    {title: "Mindfulness & Meditation", slug: "mindfulness-meditation-basics", description: "Meditation for mental health", readTime: 10}
  ]

  const gettingStartedArticles = [
    {title: "Getting Started at Tasel Health", slug: "getting-started-tasel-health", description: "New patient guide", readTime: 11},
    {title: "Treatment Options Comparison", slug: "comprehensive-treatment-options-guide", description: "TMS, meds, therapy compared", readTime: 15},
    {title: "When to Seek Help", slug: "when-to-seek-help", description: "Signs you need support", readTime: 10},
    {title: "Understanding Depression", slug: "understanding-depression", description: "Symptoms, causes, treatment", readTime: 14}
  ]

  return (
    <main className="min-h-screen">
      <KnowledgeHubHero />
      
      {/* Stats Bar */}
      <section className="py-6 md:py-8 bg-gradient-to-r from-purple-900 to-teal-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">40</div>
              <div className="text-xs md:text-sm opacity-90">Expert Articles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">475+</div>
              <div className="text-xs md:text-sm opacity-90">Minutes of Reading</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
              <div className="text-xs md:text-sm opacity-90">Accuracy Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5</div>
              <div className="text-xs md:text-sm opacity-90">Knowledge Hubs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Medications Hub */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollContainer variant="blue">
            <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
              <div className="flex items-center mb-6 md:mb-8">
                <Pill className="h-8 w-8 md:h-10 md:w-10 text-blue-600 mr-3 md:mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Medications Hub</h2>
                  <p className="text-sm sm:text-base text-gray-600">Psychiatric medication guides & safety</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {medicationArticles.map((article, index) => (
                  <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                    <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                      <Badge className="mb-3 bg-blue-100 text-blue-700">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime} min
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{article.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollContainer>
        </div>
      </section>

      {/* TMS Hub */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollContainer variant="purple">
            <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
              <div className="flex items-center mb-6 md:mb-8">
                <Brain className="h-8 w-8 md:h-10 md:w-10 text-purple-600 mr-3 md:mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">TMS Therapy Hub</h2>
                  <p className="text-sm sm:text-base text-gray-600">Brain stimulation treatment explained</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {tmsArticles.map((article, index) => (
                  <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                    <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
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
          </ScrollContainer>
        </div>
      </section>

      {/* Ketamine Hub */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollContainer variant="violet">
            <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
              <div className="flex items-center mb-6 md:mb-8">
                <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-violet-600 mr-3 md:mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Spravato® & Ketamine Hub</h2>
                  <p className="text-sm sm:text-base text-gray-600">Spravato® & IV ketamine for depression</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {KETAMINE_ARTICLES.map((article, index) => (
                  <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 rounded-lg">
                    <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
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
          </ScrollContainer>
        </div>
      </section>

      {/* Therapy Hub */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollContainer variant="teal">
            <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
              <div className="flex items-center mb-6 md:mb-8">
                <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-teal-600 mr-3 md:mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Therapy & Counseling Hub</h2>
                  <p className="text-sm sm:text-base text-gray-600">Evidence-based therapy approaches</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {therapyArticles.map((article, index) => (
                  <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                    <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                      <Badge className="mb-3 bg-teal-100 text-teal-700">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime} min
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{article.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollContainer>
        </div>
      </section>

      {/* Skills Hub */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollContainer variant="amber">
            <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
              <div className="flex items-center mb-6 md:mb-8">
                <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-amber-600 mr-3 md:mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Skills & Self-Help Hub</h2>
                  <p className="text-sm sm:text-base text-gray-600">Practical tools you can use today</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {skillsArticles.map((article, index) => (
                  <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                    <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                      <Badge className="mb-3 bg-amber-100 text-amber-700">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime} min
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{article.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollContainer>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6 md:mb-8">
            <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-purple-600 mr-3 md:mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Getting Started</h2>
              <p className="text-sm sm:text-base text-gray-600">New to mental health treatment? Start here</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {gettingStartedArticles.map((article, index) => (
              <Link key={index} href={`/knowledge-hub/${article.slug}`} className="group">
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

      {/* Featured Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-teal-600">
        <div className="container mx-auto px-4 text-center text-white">
          <TrendingUp className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 md:mb-6 opacity-90" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Evidence-Based Education, Always Free
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            All articles reviewed by board-certified psychiatrists and licensed psychologists.  
            Fact-checked against primary sources. Updated regularly.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs sm:text-sm px-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">✓ Clinically Accurate</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">✓ Patient-Friendly</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">✓ Regularly Updated</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">✓ Free Forever</div>
          </div>
        </div>
      </section>

      <StillHaveQuestions />
    </main>
  )
}
