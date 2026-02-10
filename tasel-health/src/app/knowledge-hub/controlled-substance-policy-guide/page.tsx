import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Shield, FileText } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Controlled Substance Prescribing: What to Expect | Tasel Health',
  description: 'Understand requirements for ADHD stimulants, benzodiazepines, and other controlled medications: prescribing policies, monitoring, and safety.',
  keywords: ['controlled substances', 'stimulant prescribing', 'benzodiazepine policy', 'ADHD medication requirements'],
}

export default function ControlledSubstancePolicyPage() {
  const keyTakeaways = [
    "Controlled substances require comprehensive evaluation, signed agreements, and regular monitoring",
    "PDMP (Prescription Drug Monitoring Program) checks are mandatory",
    "Refills require consistent follow-up appointments—no early refills for lost/stolen medications",
    "Non-controlled alternatives are prioritized when clinically appropriate",
    "These policies protect patient safety and comply with state/federal regulations"
  ]

  const faqs = [
    {question: "Why are controlled substances treated differently?", answer: "Controlled substances have potential for misuse, dependence, and diversion (giving/selling to others). Federal and state laws require stricter prescribing practices to ensure appropriate medical use and patient safety."},
    {question: "What's required before getting a controlled substance prescription?", answer: "Comprehensive evaluation (medical history, symptom assessment, prior treatments), PDMP check (reviews your controlled substance prescription history), written treatment agreement outlining responsibilities, and sometimes urine drug screening."},
    {question: "Can I get stimulants for ADHD on my first visit?", answer: "Generally no. We need time to review your history, confirm ADHD diagnosis, rule out contraindications, and establish a treatment plan. This protects your safety and ensures appropriate prescribing."},
    {question: "What if I lose my controlled substance prescription?", answer: "Unfortunately, lost or stolen controlled medications generally cannot be refilled early. This is a federal regulation, not our policy. We can provide documentation for insurance/work if needed, but early refills create liability and compliance issues."},
    {question: "How often do I need to see the doctor for refills?", answer: "At least every 1-3 months for controlled substances, depending on the medication and your stability. Missed appointments may pause refills until you're seen. Consistent follow-up is required by law and medical best practice."},
    {question: "Will you prescribe benzodiazepines for anxiety?", answer: "Rarely and only short-term. Benzodiazepines (Xanax, Ativan, Klonopin) carry significant risks of dependence and cognitive effects. We prefer SSRIs, SNRIs, buspirone, or therapy for anxiety. Benzos may be used briefly in crisis situations under close monitoring."},
    {question: "What's a PDMP check?", answer: "Prescription Drug Monitoring Program—a state database showing all controlled substance prescriptions you've received. We're required to check this before prescribing controlled medications to ensure safe, coordinated care."},
    {question: "Can I fill controlled substances at any pharmacy?", answer: "We'll send prescriptions to your preferred pharmacy within your state. Federal law prohibits mailing controlled substances across state lines. Changing pharmacies frequently may raise red flags and require additional documentation."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="Controlled Substance Prescribing: What to Expect" summary="Understand requirements for ADHD stimulants, benzodiazepines, and other controlled medications: policies, monitoring, refills, and safety." estimatedReadTime={11} lastReviewed="May 29, 2024" author="Tasel Health Medical Team" clinicalReviewer="Board-Certified Psychiatrist" tags={['Medications', 'Controlled Substances', 'ADHD', 'Policy']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Controlled Substances?</h2>
          <p className="mb-4">Controlled substances are medications regulated by the DEA due to potential for misuse or dependence. In psychiatry, this includes:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Stimulants:</strong> ADHD medications (Adderall, Ritalin, Vyvanse)</li>
            <li><strong>Benzodiazepines:</strong> Anti-anxiety medications (Xanax, Ativan, Klonopin)</li>
            <li><strong>Sleep medications:</strong> Some (Ambien, Lunesta)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Requirements for Prescribing</h2>
          <Card className="p-6 bg-purple-50 border-purple-200">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3"><FileText className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" /><span><strong>Comprehensive evaluation:</strong> Medical history, symptom assessment, prior treatment documentation</span></li>
              <li className="flex items-start space-x-3"><Shield className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" /><span><strong>Written agreement:</strong> Signed treatment agreement outlining responsibilities</span></li>
              <li className="flex items-start space-x-3"><FileText className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" /><span><strong>PDMP review:</strong> Check prescription history before prescribing</span></li>
              <li className="flex items-start space-x-3"><Shield className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" /><span><strong>Regular follow-ups:</strong> Consistent appointments to monitor safety and effectiveness</span></li>
              <li className="flex items-start space-x-3"><FileText className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" /><span><strong>ID verification:</strong> Valid government ID required at visits</span></li>
              <li className="flex items-start space-x-3"><Shield className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" /><span><strong>Drug screening:</strong> Urine tests may be requested periodically</span></li>
            </ul>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Refill Policy</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Request early:</strong> Submit refill requests 3-5 business days before running out</li>
            <li><strong>No early refills:</strong> Lost, stolen, or misplaced medications cannot be refilled early</li>
            <li><strong>In-state pharmacy required:</strong> Prescriptions sent to pharmacies within your state of residence only</li>
            <li><strong>Appointment-tied refills:</strong> Missed visits may pause refills until you're seen</li>
            <li><strong>Communication:</strong> Use patient portal for non-urgent refill requests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="border-l-4 border-purple-500 pl-4 py-2"><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}</div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. DEA Practitioner's Manual (2021). "An informational outline of the Controlled Substances Act."</li>
            <li>2. Federation of State Medical Boards. (2017). "Guidelines for the chronic use of opioid analgesics." [Adapted principles apply to psychiatric controlled substances]</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/adhd-medications-guide" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">ADHD Medications</h3><p className="text-sm text-gray-600">Stimulants & non-stimulants</p></Card></Link>
            <Link href="/knowledge-hub/managing-anxiety-symptoms" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Anxiety Without Benzos</h3><p className="text-sm text-gray-600">Alternative treatments</p></Card></Link>
            <Link href="/services/psychiatry" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Psychiatric Services</h3><p className="text-sm text-gray-600">Medication management</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
