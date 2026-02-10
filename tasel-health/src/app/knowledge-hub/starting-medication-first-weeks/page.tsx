import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Calendar, TrendingUp } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Starting Psychiatric Medication: Week-by-Week Guide | Tasel Health',
  description: 'Know what to expect in your first weeks on psychiatric medication: early effects, adjustment period, tracking progress, and when to reach out.',
  keywords: ['starting antidepressants', 'first week on medication', 'psychiatric medication timeline', 'medication adjustment period'],
}

export default function StartingMedicationPage() {
  const keyTakeaways = [
    "Weeks 1-2 are an adjustment period; side effects often peak then improve",
    "Weeks 3-4 some people notice subtle mood, sleep, or energy improvements",
    "Weeks 5-8 full therapeutic effect usually becomes apparent",
    "Track mood, sleep, energy, and side effects daily to help your doctor",
    "Stay in close contact with your prescriber, especially in the first month"
  ]

  const faqs = [
    {question: "What should I expect in the first week?", answer: "The first week is about adjustment. You may notice some side effects (nausea, jitteriness, sedation depending on the medication) before you notice mood benefits. This is normal. Side effects often lessen after the first 1-2 weeks."},
    {question: "When will I feel better?", answer: "Most people notice full mood benefits around 4-8 weeks. Some notice earlier improvements in sleep or energy (weeks 1-3), but mood changes typically take longer. Be patient and give the medication adequate time."},
    {question: "What if I feel worse at first?", answer: "Some medications can cause initial activation (restlessness, anxiety) or sedation. This usually improves in 1-2 weeks. If you feel significantly worse, have new suicidal thoughts, or can't tolerate side effects, contact your doctor promptly."},
    {question: "Should I take it in the morning or at night?", answer: "Depends on the medication and how it affects you. Activating medications (SSRIs, bupropion) are often taken in the morning. Sedating medications (mirtazapine) are usually taken at bedtime. Your doctor will provide guidance, and you can adjust based on your response."},
    {question: "Can I take it with food?", answer: "Most antidepressants can be taken with or without food. Taking with food may reduce nausea for some people. Check your specific medication's instructions or ask your pharmacist."},
    {question: "What if I have side effects?", answer: "Contact your doctor. Many side effects are temporary and manageable. Your doctor may suggest waiting them out (if mild), adjusting the dose, changing the timing, or switching medications if side effects are intolerable."},
    {question: "How often should I see my doctor?", answer: "Typically every 1-2 weeks initially, then every 4-6 weeks once stable. More frequent visits may be needed if you're having side effects or not responding. Regular monitoring ensures safety and allows dose adjustments."},
    {question: "Can I adjust the dose myself?", answer: "No—never adjust psychiatric medication doses on your own. Dose changes should always be guided by your prescriber based on your response, side effects, and clinical monitoring."},
    {question: "What if I don't notice any change by week 6?", answer: "Contact your doctor. If there's truly no response after 6-8 weeks at an adequate dose, your doctor may increase the dose, add a second medication, or try a different medication altogether."},
    {question: "When should I call my doctor right away?", answer: "Call immediately if you experience: new or worsening suicidal thoughts, severe agitation or panic, unusual mood elevation (mania), severe allergic reaction (rash, swelling, difficulty breathing), or any symptom that feels dangerous or unbearable."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  const howToSchema = {"@context": "https://schema.org", "@type": "HowTo", "name": "How to Start Psychiatric Medication Safely", "step": [{name: "Get prescription & instructions", text: "Understand dosing, timing, what to expect"}, {name: "Take first dose", text: "Start medication as prescribed; note time of day"}, {name: "Track response daily", text: "Log mood, sleep, energy, side effects"}, {name: "Attend follow-ups", text: "See prescriber at 1-2 weeks, then regularly"}, {name: "Communicate openly", text: "Report concerns, side effects, improvements"}]}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ArticleLayout title="Starting Medication: Your First 4-8 Weeks" summary="What to expect when starting psychiatric medication: timeline, common early effects, when to call your doctor, and how to track progress." estimatedReadTime={13} lastReviewed="July 24, 2024" author="Tasel Health Medical Team" clinicalReviewer="Board-Certified Psychiatrist" tags={['Medications', 'Getting Started', 'Timeline', 'Monitoring']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Week 1-2: The Adjustment Period</h2>
          <p className="mb-4"><strong>What's happening:</strong> Your body is adjusting to the medication. You likely won't feel the full mood benefits yet, but you may notice side effects.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Common experiences:</strong> Nausea, jitteriness, sedation (depends on medication)</li>
            <li><strong>Sleep changes:</strong> May sleep more or have disrupted sleep initially</li>
            <li><strong>Energy:</strong> Some medications cause temporary fatigue; others activation</li>
            <li><strong>Mood:</strong> Usually no significant mood improvement yet</li>
          </ul>
          <p className="mb-4"><strong>What to do:</strong> Give it time. Most early side effects improve by week 2-3. Stay in contact with your doctor.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Week 3-4: Subtle Shifts</h2>
          <p className="mb-4"><strong>What's happening:</strong> Medication reaches steady levels in your system. Early responders may notice improvements.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Sleep:</strong> May become more regulated and restful</li>
            <li><strong>Energy:</strong> Some people notice more consistent energy</li>
            <li><strong>Mood:</strong> Subtle improvements; less intense sadness or hopelessness</li>
            <li><strong>Side effects:</strong> Often lessening by now</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Week 5-8: Full Effect</h2>
          <p className="mb-4"><strong>What's happening:</strong> For most people who will respond, full therapeutic benefits emerge.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Mood:</strong> More consistent emotional stability; reduced depression symptoms</li>
            <li><strong>Functioning:</strong> Better able to engage with work, relationships, activities</li>
            <li><strong>Assessment time:</strong> Your doctor evaluates if medication is working adequately</li>
          </ul>
          <p className="mb-4">If you're not seeing adequate improvement by week 8, your doctor may adjust dose or try a different approach.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="border-l-4 border-purple-500 pl-4 py-2"><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}</div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. Taylor MJ, et al. (2006). "Early onset of selective serotonin reuptake inhibitor antidepressant action." Archives of General Psychiatry 63(11):1217-1223.</li>
            <li>2. Papakostas GI, Fava M. (2008). "Predictors, moderators, and mediators of treatment outcome in major depressive disorder." Dialogues in Clinical Neuroscience 10(4):439-451.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/antidepressants-explained" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Antidepressants Explained</h3><p className="text-sm text-gray-600">Types and how they work</p></Card></Link>
            <Link href="/knowledge-hub/managing-medication-side-effects" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Managing Side Effects</h3><p className="text-sm text-gray-600">Solutions and strategies</p></Card></Link>
            <Link href="/knowledge-hub/medication-pregnancy-planning" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Medication & Pregnancy</h3><p className="text-sm text-gray-600">Planning considerations</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
