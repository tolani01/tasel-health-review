import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Heart, Shield } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DBT Skills: Emotion Regulation & Distress Tolerance Strategies',
  description: 'Master DBT (Dialectical Behavior Therapy) skills for managing emotions, tolerating distress, and improving interpersonal relationships.',
  keywords: ['DBT skills', 'dialectical behavior therapy', 'emotion regulation', 'distress tolerance', 'DBT techniques'],
}

export default function DBTSkillsPage() {
  const keyTakeaways = [
    "DBT provides practical skills for managing intense emotions and difficult situations",
    "Four skill modules: Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness",
    "Originally developed for borderline personality disorder, now used widely for emotion dysregulation",
    "Skills are learned through practice—the more you use them, the more automatic they become",
    "DBT-informed therapy means using these skills without full DBT program structure"
  ]

  const faqs = [
    {question: "What is DBT?", answer: "Dialectical Behavior Therapy is a type of cognitive-behavioral therapy that teaches skills for managing emotions, tolerating distress, and improving relationships. It was originally developed for borderline personality disorder but is now used for many conditions involving emotional intensity."},
    {question: "Do I need full DBT or just DBT skills?", answer: "Full DBT is a comprehensive program with individual therapy, skills group, phone coaching, and therapist consultation team. Many people benefit from 'DBT-informed therapy'—learning DBT skills in regular individual therapy without the full program structure."},
    {question: "What's the STOP skill?", answer: "STOP is a distress tolerance skill: Stop (freeze), Take a step back (don't react immediately), Observe (notice what's happening), Proceed mindfully (choose wise action). It creates space between impulse and action."},
    {question: "How do I practice emotion regulation?", answer: "DBT teaches strategies like: naming emotions accurately, understanding what triggered them, opposite action (acting opposite to emotion urge), checking the facts (are my thoughts accurate?), and self-soothing techniques. Practice these in daily life."},
    {question: "What's DEAR MAN?", answer: "DEAR MAN is an interpersonal effectiveness skill for making requests: Describe situation, Express feelings, Assert needs, Reinforce (explain benefits), stay Mindful, Appear confident, Negotiate. It helps you communicate clearly while maintaining relationships."},
    {question: "Can DBT help with anger?", answer: "Yes! DBT is excellent for anger management. Skills like distress tolerance (STOP, TIPP), emotion regulation (opposite action, check the facts), and interpersonal effectiveness (DEAR MAN) directly address anger and reactive behaviors."},
    {question: "Do I need DBT if I don't have borderline personality disorder?", answer: "DBT skills help anyone who struggles with emotion intensity, impulsivity, relationship conflicts, or distress tolerance. You don't need a specific diagnosis—if you feel emotions intensely or react impulsively, DBT skills can help."},
    {question: "How long does it take to learn DBT skills?", answer: "In full DBT programs, skills are taught over 6-12 months. In DBT-informed individual therapy, you'll learn key skills over several weeks to months. Mastery comes with practice—the more you use skills, the more natural they become."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  const howToSchema = {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Use DBT STOP Skill", "step": [{"name": "Stop", "text": "Freeze—don't react immediately"}, {"name": "Take a step back", "text": "Create mental space from the situation"}, {"name": "Observe", "text": "Notice what's happening inside and outside you"}, {"name": "Proceed mindfully", "text": "Choose how to respond wisely"}]}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ArticleLayout title="DBT Skills: Emotion Regulation & Distress Tolerance" summary="Learn Dialectical Behavior Therapy skills: managing intense emotions, tolerating distress, and improving relationships with practical tools." estimatedReadTime={13} lastReviewed="October 12, 2024" author="Tasel Health Medical Team" clinicalReviewer="Licensed Clinical Psychologist" tags={['Therapy', 'DBT', 'Skills', 'Emotion Regulation', 'Distress Tolerance']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Four DBT Skill Modules</h2>
          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Mindfulness</h3>
              <p className="text-gray-700">Being present in the moment; observing without judgment; focusing attention intentionally</p>
            </Card>
            <Card className="p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Distress Tolerance</h3>
              <p className="text-gray-700">Getting through crisis without making it worse; skills like STOP, TIPP, distraction, self-soothing</p>
            </Card>
            <Card className="p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Emotion Regulation</h3>
              <p className="text-gray-700">Understanding and managing emotions; reducing emotional vulnerability; opposite action</p>
            </Card>
            <Card className="p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Interpersonal Effectiveness</h3>
              <p className="text-gray-700">Communicating needs, setting boundaries, maintaining self-respect in relationships (DEAR MAN, GIVE, FAST)</p>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="border-l-4 border-purple-500 pl-4 py-2"><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}</div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. Linehan MM. (2015). "DBT Skills Training Manual." (2nd ed.) Guilford Press.</li>
            <li>2. Neacsiu AD, et al. (2010). "Dialectical behavior therapy skills use as a mediator and outcome of treatment." Behaviour Research and Therapy 48(9):832-839.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/cbt-cognitive-behavioral-therapy" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">CBT Explained</h3><p className="text-sm text-gray-600">Cognitive therapy</p></Card></Link>
            <Link href="/knowledge-hub/5-minute-calm-breathing-grounding" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Breathing Techniques</h3><p className="text-sm text-gray-600">Quick distress tolerance</p></Card></Link>
            <Link href="/knowledge-hub/how-therapy-works" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">How Therapy Works</h3><p className="text-sm text-gray-600">Therapy process</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
