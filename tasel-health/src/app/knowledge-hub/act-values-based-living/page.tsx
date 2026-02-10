import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Compass, Heart } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acceptance and Commitment Therapy (ACT): Values-Based Living',
  description: 'Discover ACT therapy: accepting difficult thoughts, clarifying values, mindful action, and building psychological flexibility.',
  keywords: ['ACT therapy', 'acceptance commitment therapy', 'values-based living', 'psychological flexibility', 'mindfulness therapy'],
}

export default function ACTPage() {
  const keyTakeaways = ["ACT helps you accept difficult thoughts/feelings rather than fighting them", "Focus on living according to your values even when emotions are hard", "Build psychological flexibility—ability to be present and take valued action", "Uses mindfulness, defusion, and committed action techniques", "Evidence-based for depression, anxiety, chronic pain, and more"]
  const faqs = [{question: "What is ACT?", answer: "Acceptance and Commitment Therapy teaches you to accept difficult internal experiences (thoughts, feelings) while committing to actions aligned with your values. Rather than trying to eliminate discomfort, ACT helps you live meaningfully despite it."}, {question: "How is ACT different from CBT?", answer: "CBT focuses on changing negative thoughts. ACT focuses on changing your relationship with thoughts—noticing them without getting caught up in them. ACT emphasizes values and acceptance; CBT emphasizes cognitive restructuring and problem-solving. Both are effective."}, {question: "What does 'defusion' mean?", answer: "Cognitive defusion means creating distance from your thoughts—seeing thoughts as mental events, not facts. For example, noticing 'I'm having the thought that I'm worthless' rather than accepting 'I am worthless' as truth."}, {question: "How do I identify my values?", answer: "Your therapist will help you explore what matters most to you in areas like relationships, work, health, personal growth, and community. Values are chosen life directions (like 'being a caring parent'), not goals (like 'get my kid into college')."}, {question: "Can ACT help with anxiety?", answer: "Yes! ACT is evidence-based for anxiety. Rather than eliminating anxiety, ACT helps you do what matters even when anxious. This paradoxically often reduces anxiety over time while improving your life."}, {question: "What's psychological flexibility?", answer: "The core goal of ACT—being able to be present, accept internal experiences, clarify values, and take committed action even when it's uncomfortable. It's the opposite of rigidity or avoidance."}, {question: "Is ACT the same as mindfulness meditation?", answer: "Mindfulness is one component of ACT, but ACT also includes values clarification, committed action, and defusion techniques. ACT uses mindfulness as a tool for larger life changes, not as the sole focus."}]
  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="ACT: Values-Based Living & Psychological Flexibility" summary="Acceptance and Commitment Therapy explained: living by your values, mindfulness, defusion techniques, and building meaningful action." estimatedReadTime={12} lastReviewed="July 16, 2024" author="Tasel Health Medical Team" clinicalReviewer="Licensed Clinical Psychologist" tags={['Therapy', 'ACT', 'Acceptance Commitment Therapy', 'Values', 'Mindfulness']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core ACT Processes</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Acceptance:</strong> Opening up to difficult feelings rather than avoiding</li>
            <li><strong>Defusion:</strong> Stepping back from thoughts; seeing them as mental events</li>
            <li><strong>Present Moment:</strong> Mindful awareness of here and now</li>
            <li><strong>Self as Context:</strong> Observer perspective on your experiences</li>
            <li><strong>Values:</strong> Clarifying what truly matters to you</li>
            <li><strong>Committed Action:</strong> Taking steps aligned with values</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="border-l-4 border-purple-500 pl-4 py-2"><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}</div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. Hayes SC, et al. (2012). "Acceptance and commitment therapy: The process and practice of mindful change." (2nd ed.) Guilford Press.</li>
            <li>2. A-Tjak JG, et al. (2015). "A meta-analysis of the efficacy of acceptance and commitment therapy for clinically relevant mental and physical health problems." Psychother Psychosom 84(1):30-36.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/cbt-cognitive-behavioral-therapy" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">CBT Explained</h3><p className="text-sm text-gray-600">Cognitive therapy</p></Card></Link>
            <Link href="/knowledge-hub/dbt-skills-emotion-regulation" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">DBT Skills</h3><p className="text-sm text-gray-600">Emotion regulation</p></Card></Link>
            <Link href="/knowledge-hub/5-minute-calm-breathing-grounding" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Mindfulness Techniques</h3><p className="text-sm text-gray-600">Grounding skills</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
