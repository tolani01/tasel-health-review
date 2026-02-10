import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Heart, AlertCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Psychiatric Medications During Pregnancy: Safety & Decision Guide',
  description: 'Navigate mental health medication decisions during pregnancy and breastfeeding with evidence-based information and shared decision-making strategies.',
  keywords: ['antidepressants pregnancy', 'medication while pregnant', 'psychiatric medication breastfeeding', 'perinatal mental health medication'],
}

export default function MedicationPregnancyPage() {
  const keyTakeaways = [
    "Both untreated mental illness AND medication carry risks during pregnancy—balance must be weighed individually",
    "Some psychiatric medications are safer in pregnancy than others",
    "Decisions should be made collaboratively with psychiatrist and OB/GYN",
    "Breastfeeding considerations differ from pregnancy safety profiles",
    "Planning ahead (before conception) allows for safest medication transitions"
  ]

  const faqs = [
    {question: "Are any psychiatric medications safe during pregnancy?", answer: "No medication is 100% risk-free, but some have more safety data than others. SSRIs like sertraline and escitalopram have more reassuring data. Lamotrigine (mood stabilizer) is often continued. The key is weighing medication risks against risks of untreated mental illness."},
    {question: "What are the risks of untreated depression during pregnancy?", answer: "Untreated depression increases risks of poor prenatal care, inadequate weight gain, preterm birth, low birth weight, and postpartum depression. Severe depression can impact mother and baby. These risks must be weighed against medication risks."},
    {question: "Should I stop my medication if I'm planning to get pregnant?", answer: "Not without medical guidance. Discuss with your psychiatrist BEFORE conceiving. Some medications should be tapered/switched; others may be continued based on risk-benefit analysis. Abrupt discontinuation can cause relapse and withdrawal symptoms."},
    {question: "Can I breastfeed while on psychiatric medication?", answer: "Many psychiatric medications are compatible with breastfeeding, though amounts do pass into breast milk. Sertraline, paroxetine, and certain others have favorable breastfeeding profiles. Your psychiatrist and pediatrician will help you decide based on your specific medication and infant's health."},
    {question: "Which medications should I definitely avoid?", answer: "Valproate (Depakote) has high risk of birth defects and developmental delays. Paroxetine in first trimester may increase heart defect risk. Benzodiazepines and lithium have concerns but sometimes continued with careful monitoring. Your doctor will review your specific medications."},
    {question: "What if I'm already pregnant and on medication?", answer: "Don't stop abruptly. Contact your psychiatrist and OB/GYN immediately to discuss your specific situation. Sudden discontinuation can be harmful. They'll help you weigh continuing vs. tapering vs. switching medications."},
    {question: "Do I need to see a specialist?", answer: "For complex cases, a perinatal psychiatrist (specialist in mental health during pregnancy) may be helpful. Your regular psychiatrist can coordinate with your OB/GYN, or refer you if needed."},
    {question: "How do I make this decision?", answer: "Use shared decision-making with your care team. Consider: severity of your mental illness, past relapse patterns when off medication, which medications you're on, trimester of pregnancy, and your values/preferences. There's rarely one 'right' answer—it's about what's best for your unique situation."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="Psychiatric Medications & Pregnancy: Shared Decision-Making" summary="Evidence-based guide to psychiatric medications during pregnancy and breastfeeding: risks, benefits, and how to make informed decisions with your doctor." estimatedReadTime={14} lastReviewed="June 14, 2024" author="Tasel Health Medical Team" clinicalReviewer="Board-Certified Psychiatrist" tags={['Medications', 'Pregnancy', 'Perinatal', 'Safety', 'Breastfeeding']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Complex Decision</h2>
          <p className="mb-4">Deciding about psychiatric medication during pregnancy is one of the most challenging decisions in mental health care. There are risks on both sides:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Medication risks:</strong> Potential effects on fetal development</li>
            <li><strong>Untreated illness risks:</strong> Impact of depression, anxiety, or bipolar disorder on pregnancy and baby</li>
          </ul>
          <p className="mb-4">The goal is to make an informed decision that's best for both you and your baby.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Medication Safety Profiles in Pregnancy</h2>
          <div className="space-y-4">
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="font-semibold text-gray-900 mb-2">More Reassuring Safety Data</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Sertraline (Zoloft):</strong> Most studied SSRI in pregnancy</li>
                <li><strong>Escitalopram (Lexapro), Citalopram (Celexa):</strong> Generally favorable data</li>
                <li><strong>Fluoxetine (Prozac):</strong> Extensive pregnancy data available</li>
                <li><strong>Lamotrigine:</strong> Preferred mood stabilizer if needed</li>
              </ul>
            </Card>

            <Card className="p-6 bg-amber-50 border-amber-200">
              <h3 className="font-semibold text-gray-900 mb-2">Use with Caution / Weigh Carefully</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Paroxetine (Paxil):</strong> Small increased risk of heart defects in first trimester</li>
                <li><strong>Venlafaxine, Duloxetine:</strong> Limited data; discuss alternatives</li>
                <li><strong>Bupropion:</strong> Less data than SSRIs; may be considered</li>
                <li><strong>Lithium:</strong> Cardiac risks; sometimes continued with monitoring if bipolar severe</li>
              </ul>
            </Card>

            <Card className="p-6 bg-red-50 border-red-200">
              <h3 className="font-semibold text-gray-900 mb-2">Generally Avoided</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Valproate (Depakote):</strong> High risk of neural tube defects and developmental delays</li>
                <li><strong>Benzodiazepines:</strong> Associated with oral cleft risks and neonatal withdrawal</li>
                <li><strong>Carbamazepine:</strong> Increased risk of birth defects</li>
              </ul>
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
            <li>1. ACOG Committee Opinion No. 757. (2018). "Screening for perinatal depression." Obstetrics & Gynecology 132(5):e208-e212.</li>
            <li>2. Molenaar NM, et al. (2018). "Guidelines on treatment of perinatal depression with antidepressants: An international review." Australian & New Zealand Journal of Psychiatry 52(4):320-327.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/antidepressants-explained" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Antidepressants Explained</h3><p className="text-sm text-gray-600">Medication types</p></Card></Link>
            <Link href="/knowledge-hub/mood-stabilizers-guide" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Mood Stabilizers</h3><p className="text-sm text-gray-600">Bipolar medications</p></Card></Link>
            <Link href="/services/counseling" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Perinatal Counseling</h3><p className="text-sm text-gray-600">Therapy support</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
