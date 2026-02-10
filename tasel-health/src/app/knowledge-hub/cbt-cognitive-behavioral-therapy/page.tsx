import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Brain, ArrowRight } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cognitive Behavioral Therapy (CBT) Explained | Tasel Health',
  description: 'Learn how CBT works: techniques, homework, thought-feeling-behavior connection, and what to expect in CBT therapy sessions.',
  keywords: ['CBT therapy', 'cognitive behavioral therapy', 'CBT techniques', 'how CBT works', 'CBT for depression anxiety'],
}

export default function CBTPage() {
  const keyTakeaways = [
    "CBT focuses on the connection between thoughts, feelings, and behaviors",
    "Evidence-based approach with strong research support for depression and anxiety",
    "Structured, goal-oriented therapy with specific skills and homework",
    "Typical course is 12-20 sessions; some people need more or less",
    "Skills learned in CBT continue working after therapy ends"
  ]

  const faqs = [
    {question: "What is CBT?", answer: "Cognitive Behavioral Therapy is a structured, evidence-based approach that helps you identify and change unhelpful thought patterns and behaviors. It's based on the idea that our thoughts influence our feelings and actions—by changing thoughts and behaviors, we can improve how we feel."},
    {question: "What does a CBT session look like?", answer: "Sessions typically include: brief check-in, review of homework, discussion of current challenges, learning/practicing new skills, and assignment of between-session practice. Sessions are structured and focused on your specific goals."},
    {question: "What kind of homework will I have?", answer: "Common CBT homework includes thought records (tracking and challenging negative thoughts), behavioral experiments (testing beliefs), activity scheduling (planning meaningful activities), and practicing skills learned in session. Homework reinforces learning and is essential for CBT to work well."},
    {question: "Does CBT work for anxiety and depression?", answer: "Yes! CBT has the strongest evidence base for treating both depression and anxiety disorders. Hundreds of studies show CBT is as effective as medication for many people, with benefits lasting after treatment ends."},
    {question: "How is CBT different from other types of therapy?", answer: "CBT is more structured and skills-focused than insight-oriented therapies. It's present-focused (not dwelling on past), goal-directed, time-limited, and involves active practice between sessions. Other therapies may be more exploratory or relationship-focused."},
    {question: "Can I do CBT if I'm on medication?", answer: "Absolutely! Combining CBT with medication is common and often more effective than either alone. The approaches complement each other well."},
    {question: "What if I'm not good at homework?", answer: "That's okay—therapy is flexible. Your therapist will work with you to find assignments that fit your life and learning style. The goal is practice, not perfection. Even small efforts count."},
    {question: "How long does CBT take?", answer: "Typical CBT courses are 12-20 sessions over 3-5 months, meeting weekly initially. Some people need fewer sessions; others benefit from longer treatment, especially for complex or chronic issues."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="CBT Explained: Tools for Changing Thoughts & Behaviors" summary="Clear guide to Cognitive Behavioral Therapy: what it is, how it works, example techniques, homework, and who benefits most." estimatedReadTime={13} lastReviewed="November 18, 2024" author="Tasel Health Medical Team" clinicalReviewer="Licensed Clinical Psychologist" tags={['Therapy', 'CBT', 'Cognitive Behavioral Therapy', 'Techniques']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The CBT Model: Thoughts → Feelings → Behaviors</h2>
          <p className="mb-4">CBT is based on a simple but powerful idea: our thoughts influence our emotions and behaviors. By changing unhelpful thinking patterns and behaviors, we can improve how we feel.</p>
          
          <Card className="p-6 bg-purple-50 border-purple-200">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The CBT Triangle</h3>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="bg-blue-100 rounded-lg p-4"><strong className="text-blue-900">Thoughts</strong></div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-purple-100 rounded-lg p-4"><strong className="text-purple-900">Feelings</strong></div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
              <div className="bg-teal-100 rounded-lg p-4"><strong className="text-teal-900">Behaviors</strong></div>
            </div>
            <p className="text-sm text-gray-600 text-center"><em>Changing any point in this triangle affects the others</em></p>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core CBT Techniques</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Thought Records:</strong> Identifying and challenging negative automatic thoughts</li>
            <li><strong>Behavioral Activation:</strong> Scheduling meaningful activities to improve mood</li>
            <li><strong>Exposure:</strong> Gradually facing feared situations to reduce avoidance</li>
            <li><strong>Problem-Solving:</strong> Structured approach to life challenges</li>
            <li><strong>Relaxation Training:</strong> Managing physical anxiety symptoms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="border-l-4 border-purple-500 pl-4 py-2"><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}</div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. Beck AT. (2011). "Cognitive behavior therapy: Basics and beyond." (2nd ed.) Guilford Press.</li>
            <li>2. Hofmann SG, et al. (2012). "The efficacy of cognitive behavioral therapy." Cognitive Therapy and Research 36(5):427-440.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/how-therapy-works" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">How Therapy Works</h3><p className="text-sm text-gray-600">Therapy overview</p></Card></Link>
            <Link href="/knowledge-hub/dbt-skills-emotion-regulation" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">DBT Skills</h3><p className="text-sm text-gray-600">Emotion regulation</p></Card></Link>
            <Link href="/knowledge-hub/behavioral-activation-depression" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Behavioral Activation</h3><p className="text-sm text-gray-600">Activity scheduling</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
