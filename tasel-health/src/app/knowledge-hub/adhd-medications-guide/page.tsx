import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Brain, Shield } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ADHD Medications for Adults: Stimulants vs Non-Stimulants | Tasel Health',
  description: 'Understand ADHD medication options: stimulants, non-stimulants, how they work, monitoring needs, and combining medication with behavioral strategies.',
  keywords: ['ADHD medication adults', 'stimulants for ADHD', 'non-stimulant ADHD medication', 'ADHD treatment options'],
}

export default function ADHDMedicationsPage() {
  const keyTakeaways = [
    "Stimulant medications are first-line treatment for ADHD in adults with 70-80% response rate",
    "Non-stimulant options available for those who can't tolerate or don't respond to stimulants",
    "Medications improve focus, impulse control, and executive function",
    "Regular monitoring and behavioral strategies enhance medication effectiveness",
    "Controlled substance policies require consistent follow-up and pharmacy coordination"
  ]

  const faqs = [
    {question: "Do ADHD medications work for adults?", answer: "Yes! ADHD medications are effective for adults, not just children. Research shows 70-80% of adults with ADHD respond to stimulant medications with improved focus, organization, and impulse control."},
    {question: "Are stimulants safe for adults?", answer: "When prescribed and monitored appropriately, yes. We screen for heart conditions, substance use history, and other risk factors. Regular monitoring ensures safe use. Misuse or diversion of stimulants is dangerous and illegal."},
    {question: "What's the difference between Adderall and Ritalin?", answer: "Both are stimulants but different types. Adderall (amphetamine) tends to last longer. Ritalin (methylphenidate) has shorter duration. Response and side effects vary by individual—some people do better with one than the other."},
    {question: "Can I get ADHD medication on my first visit?", answer: "Generally no. We typically require comprehensive evaluation including symptom history, prior records, and sometimes rating scales. Stimulants are controlled substances requiring careful prescribing. Initial visits focus on diagnosis and treatment planning."},
    {question: "Will I build tolerance to ADHD medication?", answer: "True pharmacological tolerance is uncommon with properly prescribed ADHD medications. If you feel medication is less effective over time, discuss with your doctor—it may be dose-related, lifestyle factors, or need for medication adjustment."},
    {question: "Can I take ADHD medication with antidepressants?", answer: "Often yes, but requires coordination. Some combinations are safe and commonly used; others require monitoring (e.g., stimulants with certain antidepressants may affect blood pressure). Your psychiatrist will manage both medications together."},
    {question: "What if stimulants make me anxious?", answer: "This can happen, especially at higher doses. Solutions include lowering the dose, switching to a different stimulant, trying extended-release formulations, or considering non-stimulant alternatives like atomoxetine or guanfacine."},
    {question: "Do I need medication every day or only when I need focus?", answer: "This depends on your ADHD severity and life demands. Some people take daily for consistent management; others use as-needed for work/study days. Discuss the best approach with your doctor based on your impairment pattern."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="ADHD Medications: Stimulants & Non-Stimulant Options" summary="Complete guide to ADHD medications for adults: how they work, monitoring requirements, safety considerations, and non-medication strategies." estimatedReadTime={13} lastReviewed="September 26, 2024" author="Tasel Health Medical Team" clinicalReviewer="Board-Certified Psychiatrist" tags={['Medications', 'ADHD', 'Stimulants', 'Controlled Substances']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of ADHD Medications</h2>
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stimulants (First-Line Treatment)</h3>
              <p className="text-gray-700 mb-3"><strong>Methylphenidate-based:</strong> Ritalin, Concerta, Focalin</p>
              <p className="text-gray-700 mb-3"><strong>Amphetamine-based:</strong> Adderall, Vyvanse, Dexedrine</p>
              <p className="text-sm text-gray-600 mb-2"><strong>How they work:</strong> Increase dopamine and norepinephrine in brain; effects within 30-60 minutes</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Effectiveness:</strong> 70-80% response rate</p>
              <p className="text-sm text-gray-600"><strong>Common side effects:</strong> Decreased appetite, insomnia, increased heart rate, anxiety</p>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Stimulants</h3>
              <p className="text-gray-700 mb-3"><strong>Atomoxetine (Strattera):</strong> Norepinephrine reuptake inhibitor; takes 2-4 weeks to work</p>
              <p className="text-gray-700 mb-3"><strong>Guanfacine (Intuniv) & Clonidine:</strong> Originally blood pressure medications; help ADHD symptoms</p>
              <p className="text-sm text-gray-600 mb-2"><strong>When used:</strong> Stimulant intolerance, substance use history, preference for non-controlled medication</p>
              <p className="text-sm text-gray-600"><strong>Effectiveness:</strong> 50-60% response rate; generally less robust than stimulants but no abuse potential</p>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Monitoring & Safety</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Heart monitoring:</strong> Baseline blood pressure/pulse; periodic checks (stimulants can increase)</li>
            <li><strong>Weight tracking:</strong> Stimulants often decrease appetite and weight</li>
            <li><strong>Mood monitoring:</strong> Watch for anxiety, irritability, or mood changes</li>
            <li><strong>Sleep assessment:</strong> Address insomnia if it develops</li>
            <li><strong>PDMP checks:</strong> Prescription Drug Monitoring Program reviewed for controlled substances</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="border-l-4 border-purple-500 pl-4 py-2"><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}</div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. Faraone SV, Glatt SJ. (2010). "A comparison of the efficacy of medications for adult ADHD." CNS Drugs 24(12):1015-1030.</li>
            <li>2. Volkow ND, et al. (2012). "Motivation deficit in ADHD is associated with dysfunction of the dopamine reward pathway." Molecular Psychiatry 16(11):1147-1154.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/controlled-substance-policy-guide" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Controlled Substance Policy</h3><p className="text-sm text-gray-600">Prescribing requirements</p></Card></Link>
            <Link href="/knowledge-hub/behavioral-activation-depression" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Behavioral Strategies</h3><p className="text-sm text-gray-600">Non-medication approaches</p></Card></Link>
            <Link href="/knowledge-hub/managing-medication-side-effects" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Managing Side Effects</h3><p className="text-sm text-gray-600">Practical solutions</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
