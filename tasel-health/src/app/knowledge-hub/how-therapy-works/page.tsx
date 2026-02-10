import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, MessageSquare, Users, TrendingUp, Activity } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Therapy Works: What to Expect from Counseling | Tasel Health',
  description: 'Understand the therapy process: first session, goal-setting, skill-building, progress tracking, and what makes counseling effective.',
  keywords: ['how therapy works', 'what to expect in therapy', 'counseling process', 'therapy sessions Oklahoma City'],
}

export default function HowTherapyWorksPage() {
  const keyTakeaways = [
    "Therapy is a collaborative process focused on your goals and needs",
    "First session (intake) establishes rapport, gathers history, and sets treatment goals",
    "Evidence-based approaches (CBT, DBT, ACT) provide practical skills and tools",
    "Progress is tracked with brief questionnaires to measure improvement objectively",
    "Most people attend weekly initially, tapering to biweekly or monthly as skills develop"
  ]

  const faqs = [
    {question: "What happens in the first therapy session?", answer: "Your first session is an intake where your therapist learns about you: your concerns, history, strengths, goals, and what you hope to achieve. It's also your chance to ask questions and see if it feels like a good fit. Think of it as a collaborative conversation, not an interrogation."},
    {question: "How long until therapy helps?", answer: "This varies. Some people feel relief from just having support and validation in the first few sessions. Measurable symptom improvement often takes 6-12 weeks of consistent work. Lasting change—developing new skills and patterns—can take several months."},
    {question: "What's the difference between therapy and just talking to a friend?", answer: "Therapists are trained professionals who use evidence-based techniques, maintain objective perspective, ensure confidentiality, and create a safe space focused entirely on you. Unlike friends, therapists provide structured skill-building and track progress systematically."},
    {question: "How often will we meet?", answer: "Typically weekly at first (45-50 minutes per session) to build momentum. As you develop skills and see improvement, sessions may taper to every other week or monthly for maintenance. Your therapist will collaborate with you on the right cadence."},
    {question: "What if I don't 'click' with my therapist?", answer: "Therapeutic rapport is crucial for success. If you don't feel a connection after 2-3 sessions, it's okay to discuss this. We can help you switch to another therapist within our clinic if available, or provide referrals elsewhere."},
    {question: "Is therapy confidential?", answer: "Yes, with a few legal exceptions: if there's imminent risk of harm to yourself or others, suspected child/elder abuse, or court orders. Your therapist will review confidentiality limits fully at your first session."},
    {question: "Do I need medication too, or is therapy enough?", answer: "Depends on your condition severity and preferences. Mild-moderate depression and anxiety often respond well to therapy alone. Moderate-severe symptoms may benefit from combining medication and therapy. Your therapist can discuss whether a psychiatry evaluation would help."},
    {question: "What happens between sessions?", answer: "You'll often have 'homework'—practicing skills, thought records, behavioral experiments, or other activities that reinforce what you're learning. Between-session practice is crucial for therapy to work well."},
    {question: "How do we know if therapy is working?", answer: "We use brief questionnaires (PHQ-9 for depression, GAD-7 for anxiety) every few weeks to track progress objectively. You'll also notice functional improvements: better sleep, improved relationships, more engagement in activities, less distress."},
    {question: "How long does therapy take?", answer: "Short-term focused therapy might be 8-16 sessions. Longer-term therapy for complex issues may continue for months or years. We'll review progress every 4-6 sessions and discuss whether to continue, taper, or transition to less frequent check-ins."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="How Therapy Works at Tasel Health" summary="What to expect from counseling: intake process, setting goals, building skills, measuring progress, and what makes therapy effective." estimatedReadTime={13} lastReviewed="December 12, 2024" author="Tasel Health Medical Team" clinicalReviewer="Licensed Clinical Psychologist" tags={['Therapy', 'Counseling', 'Getting Started', 'Process']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Therapy Process: Step-by-Step</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><MessageSquare className="h-6 w-6 text-purple-600 mr-2" />Step 1: Intake Session (45-60 min)</h3>
              <p className="text-gray-700 mb-2">Your first session is about understanding your unique story and needs.</p>
              <p className="text-sm text-gray-600"><strong>What we cover:</strong> Current concerns, history, strengths, goals, preferences (telehealth vs. in-person), consent, and confidentiality</p>
            </Card>

            <Card className="p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><Users className="h-6 w-6 text-teal-600 mr-2" />Step 2: Collaborative Goal-Setting</h3>
              <p className="text-gray-700 mb-2">Together, you and your therapist set clear, achievable goals.</p>
              <p className="text-sm text-gray-600"><strong>What we determine:</strong> Treatment goals, session frequency, expected timeline, therapy approach that fits your needs</p>
            </Card>

            <Card className="p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><Activity className="h-6 w-6 text-blue-600 mr-2" />Step 3: Skill-Building & Active Work</h3>
              <p className="text-gray-700 mb-2">Learn and practice new coping strategies, perspectives, and behaviors.</p>
              <p className="text-sm text-gray-600"><strong>What happens:</strong> Weekly sessions with homework between; practicing new skills in daily life; processing difficult experiences; building resilience</p>
            </Card>

            <Card className="p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><TrendingUp className="h-6 w-6 text-green-600 mr-2" />Step 4: Progress Tracking & Adjustment</h3>
              <p className="text-gray-700 mb-2">Regular check-ins ensure therapy is helping and adjust as needed.</p>
              <p className="text-sm text-gray-600"><strong>How we track:</strong> Brief questionnaires every 4-6 sessions; discuss what's working; celebrate wins; modify approach if needed</p>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Evidence-Based Approaches We Use</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>CBT (Cognitive Behavioral Therapy):</strong> Changing thought patterns and behaviors</li>
            <li><strong>DBT Skills:</strong> Emotion regulation, distress tolerance, interpersonal effectiveness</li>
            <li><strong>ACT (Acceptance & Commitment Therapy):</strong> Values-based living, psychological flexibility</li>
            <li><strong>Trauma-focused approaches:</strong> EMDR, prolonged exposure, CPT for trauma/PTSD</li>
            <li><strong>Motivational Interviewing:</strong> Resolving ambivalence about change</li>
          </ul>
          <p className="mb-4">Therapy is individualized—your therapist tailors the approach to your specific needs, cultural background, and preferences.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="border-l-4 border-purple-500 pl-4 py-2"><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}</div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. Cuijpers P, et al. (2013). "A meta-analysis of cognitive-behavioural therapy for adult depression, alone and in comparison with other treatments." Canadian Journal of Psychiatry 58(7):376-385.</li>
            <li>2. Wampold BE. (2015). "How important are the common factors in psychotherapy?" World Psychiatry 14(3):270-277.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/cbt-cognitive-behavioral-therapy" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">CBT Explained</h3><p className="text-sm text-gray-600">Cognitive techniques</p></Card></Link>
            <Link href="/knowledge-hub/dbt-skills-emotion-regulation" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">DBT Skills</h3><p className="text-sm text-gray-600">Emotion regulation</p></Card></Link>
            <Link href="/knowledge-hub/getting-started-tasel-health" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Getting Started</h3><p className="text-sm text-gray-600">First visit guide</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
