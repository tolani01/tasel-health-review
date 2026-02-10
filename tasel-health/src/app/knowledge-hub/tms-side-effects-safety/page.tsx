import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, AlertCircle, Shield, Activity, Phone } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TMS Side Effects & Safety Profile: Complete Patient Guide',
  description: 'Understand TMS therapy side effects: what\'s common, what\'s rare, safety precautions, and when to contact your doctor.',
  keywords: ['TMS side effects', 'TMS safety', 'is TMS safe', 'TMS risks', 'TMS contraindications'],
  openGraph: {
    title: 'TMS Side Effects & Safety: What You Need to Know',
    description: 'Comprehensive guide to TMS safety and side effect management.',
    type: 'article',
  },
}

export default function TMSSafetyPage() {
  const keyTakeaways = [
    "TMS has an excellent safety profile with millions of treatments delivered worldwide",
    "Most side effects are mild and temporary: scalp discomfort (30-40%) and headache (20-30%)",
    "Seizure risk is extremely low (less than 0.1%, approximately 1 in 30,000 sessions)",
    "Thorough safety screening identifies people who should not use TMS",
    "Over 20 years of research and clinical use support TMS long-term safety"
  ]

  const faqs = [
    {
      question: "Will TMS hurt?",
      answer: "TMS is not typically described as painful. Most people feel a tapping sensation on their scalp and hear clicking sounds. Some experience mild scalp discomfort, especially during the first few sessions, which usually lessens as your body adjusts. We can adjust settings to improve comfort."
    },
    {
      question: "How common are TMS side effects?",
      answer: "Common side effects include scalp discomfort (30-40% of people) and mild headache (20-30%). These are usually mild, temporary, and most common in the first week of treatment. Serious side effects are very rare."
    },
    {
      question: "Can TMS cause brain damage?",
      answer: "No. TMS uses magnetic fields similar to an MRI and does not cause brain damage. Extensive research over 20+ years shows TMS does not harm brain tissue. In fact, TMS may promote healthy brain changes (neuroplasticity) that support mood improvement."
    },
    {
      question: "Is TMS safe during pregnancy?",
      answer: "TMS is generally avoided during pregnancy due to limited safety data, not because of known harm. While magnetic fields at TMS levels haven't shown fetal harm in studies, the cautious approach is to wait until after pregnancy. If you're pregnant or planning pregnancy, discuss timing with your doctor."
    },
    {
      question: "Can TMS cause seizures?",
      answer: "Seizures are extremely rare with TMS—less than 0.1% risk (approximately 1 in 30,000 sessions). The risk is similar to the spontaneous seizure risk in the general population. We screen for seizure risk factors (history of seizures, brain lesions, certain medications) before treatment."
    },
    {
      question: "What about hearing loss from TMS?",
      answer: "Hearing loss is very rare and preventable. The clicking sound during TMS can be loud, which is why we provide earplugs for every session. As long as you wear earplugs as instructed, hearing damage is not expected."
    },
    {
      question: "Can TMS make depression worse?",
      answer: "This is very uncommon. Some people may feel emotionally sensitive or have mood fluctuations during treatment, which can be part of the brain adjustment process. If you experience worsening depression, new suicidal thoughts, or unusual mood changes, contact your doctor immediately."
    },
    {
      question: "Is TMS safer than medication?",
      answer: "TMS and medications have different safety profiles. TMS avoids systemic side effects like nausea, weight changes, or sexual dysfunction that can occur with medications. However, TMS requires clinic visits and has rare risks like seizures. Neither is universally 'safer'—it depends on your individual health and circumstances."
    },
    {
      question: "Can I do TMS if I have metal in my body?",
      answer: "It depends on the type and location. Metal in or near your head (cochlear implants, aneurysm clips, deep brain stimulators) is typically a contraindication. Metal elsewhere in your body (knee replacement, dental fillings) is usually fine. Provide a complete list of any metal implants or medical devices during screening."
    },
    {
      question: "Are there long-term effects of TMS?",
      answer: "Long-term follow-up studies (5-10 years) have not identified concerning late effects. TMS does not appear to cause cognitive decline, memory problems, or other long-term complications. The main 'long-term effect' we aim for is sustained improvement in mood."
    }
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <ArticleLayout
        title="TMS Side Effects & Safety: What You Need to Know"
        summary="Comprehensive guide to TMS safety: common side effects, rare risks, who should avoid TMS, and what to report to your doctor."
        estimatedReadTime={11}
        lastReviewed="May 21, 2024"
        author="Tasel Health Medical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['TMS', 'Safety', 'Side Effects', 'Monitoring']}
      >
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{takeaway}</span>
              </li>
            ))}
          </ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">TMS Safety Overview</h2>
          <p className="mb-4">
            TMS has been used clinically for over 20 years, with millions of treatment sessions delivered worldwide. It has an excellent safety record and is generally well-tolerated.
          </p>
          <p className="mb-4">
            The most common side effects are mild and temporary. Serious adverse events are rare when proper screening and protocols are followed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Side Effects (Usually Mild & Temporary)</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Activity className="h-5 w-5 text-blue-600 mr-2" />
                1. Scalp Discomfort or Tingling
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Frequency:</strong> 30-40% of people  
                <strong className="ml-4">Severity:</strong> Mild to moderate
              </p>
              <p className="text-gray-700 mb-2"><strong>What it feels like:</strong></p>
              <p className="text-gray-700 mb-3">Tapping, tingling, or mild stinging sensation on the scalp during magnetic pulses.</p>
              <p className="text-gray-700 mb-2"><strong>Management:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Usually lessens significantly after first week</li>
                <li>Technician can adjust coil position or intensity</li>
                <li>Taking acetaminophen/ibuprofen before session may help</li>
                <li>Sensation typically becomes tolerable quickly</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-teal-500">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Activity className="h-5 w-5 text-teal-600 mr-2" />
                2. Headache
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Frequency:</strong> 20-30% of people  
                <strong className="ml-4">Severity:</strong> Mild
              </p>
              <p className="text-gray-700 mb-2"><strong>What it feels like:</strong></p>
              <p className="text-gray-700 mb-3">Tension-type headache after sessions, usually resolves within hours.</p>
              <p className="text-gray-700 mb-2"><strong>Management:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Over-the-counter pain relievers (acetaminophen, ibuprofen)</li>
                <li>Hydration before and after sessions</li>
                <li>Usually improves after first week of treatment</li>
                <li>Rarely severe enough to discontinue treatment</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Activity className="h-5 w-5 text-purple-600 mr-2" />
                3. Facial Twitching During Treatment
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Frequency:</strong> Most people  
                <strong className="ml-4">Severity:</strong> Mild, temporary
              </p>
              <p className="text-gray-700 mb-2"><strong>What it feels like:</strong></p>
              <p className="text-gray-700 mb-3">Brief muscle contraction in face/jaw during each magnetic pulse. Stops immediately when pulses stop.</p>
              <p className="text-gray-700 mb-2"><strong>Management:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Normal and expected—shows the magnetic field is working</li>
                <li>Can be reduced by adjusting coil position</li>
                <li>Not harmful; purely a stimulation effect</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-indigo-500">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                <Activity className="h-5 w-5 text-indigo-600 mr-2" />
                4. Lightheadedness or Dizziness
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Frequency:</strong> Less than 10%  
                <strong className="ml-4">Severity:</strong> Mild
              </p>
              <p className="text-gray-700 mb-2"><strong>Management:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Usually related to sitting still for 20-30 minutes</li>
                <li>Stand up slowly after treatment</li>
                <li>Stay hydrated</li>
                <li>Rare to interfere with daily activities</li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rare but Serious Risks</h2>
          <Card className="p-6 bg-red-50 border-red-200">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Serious Side Effects (Very Rare)</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Seizure (Less than 0.1% risk)</h4>
                  <p className="text-gray-700 mb-2">
                    Extremely rare—approximately 1 in 30,000 sessions. Risk factors include personal or family history of seizures, brain injury, certain medications, or alcohol withdrawal. We screen carefully to minimize this risk.
                  </p>
                  <p className="text-sm text-gray-600">
                    <em>If a seizure occurs, it is managed medically and TMS is typically discontinued.</em>
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Hearing Changes (Very Rare)</h4>
                  <p className="text-gray-700 mb-2">
                    Can occur if earplugs are not worn consistently. Always wear provided hearing protection during sessions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mania or Hypomania (Rare in Bipolar Disorder)</h4>
                  <p className="text-gray-700">
                    In people with bipolar disorder, TMS may trigger mood elevation. We monitor closely and may adjust mood stabilizers during treatment.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Screening: What We Check Before Treatment</h2>
          <p className="mb-4">
            Before starting TMS, you'll complete a comprehensive safety evaluation:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Medical history:</strong> Seizure disorders, brain injury, neurological conditions</li>
            <li><strong>Medications:</strong> Drugs that lower seizure threshold (some antipsychotics, bupropion at high doses)</li>
            <li><strong>Metal screening:</strong> Any metal implants or devices in/near your head</li>
            <li><strong>Cardiac devices:</strong> Pacemakers, implanted defibrillators (usually not contraindications but require evaluation)</li>
            <li><strong>Pregnancy status:</strong> Confirmed not pregnant (TMS avoided during pregnancy)</li>
            <li><strong>Substance use:</strong> Alcohol or drug use that could affect seizure risk</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Absolute Contraindications: Who Should NOT Use TMS</h2>
          <Card className="p-6 bg-amber-50 border-amber-200">
            <h3 className="font-bold text-gray-900 mb-3">TMS is NOT Safe If You Have:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Metallic implants in or near head:</strong> Cochlear implants, aneurysm clips, brain stimulators, metallic foreign bodies</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Certain medical devices:</strong> Deep brain stimulators, vagus nerve stimulators near head</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Metallic ink tattoos on scalp:</strong> Face/neck tattoos are okay, but scalp tattoos with metallic ink can heat up</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              <strong>Note:</strong> Dental fillings, braces, and metal elsewhere in body (hips, knees, etc.) are typically NOT contraindications. Always disclose all metal to your doctor.
            </p>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Monitoring During Treatment</h2>
          <p className="mb-4">
            Throughout your TMS course, we monitor for safety and effectiveness:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Before each session:</strong> Ask about new symptoms, medication changes, or concerns</li>
            <li><strong>During sessions:</strong> Monitor for comfort and any unusual reactions</li>
            <li><strong>Weekly assessments:</strong> Track mood, side effects, and response to treatment</li>
            <li><strong>Ongoing communication:</strong> Coordinate with your psychiatrist about medications and progress</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call Your Doctor</h2>
          <Card className="p-6 bg-red-50 border-red-200">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Contact Your Doctor If You Experience:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Severe or worsening headaches that don't respond to over-the-counter pain relief</li>
                  <li>• Unusual mood changes, agitation, or new suicidal thoughts</li>
                  <li>• Twitching that continues after treatment ends</li>
                  <li>• Hearing changes, ringing in ears, or muffled hearing</li>
                  <li>• Signs of mania: decreased need for sleep, racing thoughts, impulsive behavior</li>
                  <li>• Seizure-like activity: convulsions, loss of consciousness, confusion</li>
                  <li>• Skin irritation or burns on scalp</li>
                  <li>• Any other concerning symptoms</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Our contact:</strong> <a href="tel:+14059341681" className="text-red-600 hover:underline font-semibold">(405) 934-1681</a> (Oklahoma City) or <a href="tel:+12102022341" className="text-red-600 hover:underline font-semibold">(210) 202-2341</a> (San Antonio)
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Long-Term Safety Data</h2>
          <p className="mb-4">
            Extensive research over two decades supports TMS safety:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>No cognitive effects:</strong> TMS does not cause memory loss or cognitive decline</li>
            <li><strong>No brain tissue damage:</strong> Magnetic fields do not harm neurons</li>
            <li><strong>No systemic toxicity:</strong> Unlike medications, TMS doesn't affect liver, kidneys, or other organs</li>
            <li><strong>Reversible:</strong> If stopped, no lingering physical effects (though mood symptoms may return)</li>
          </ul>
          <p className="mb-4">
            Long-term follow-up studies (5-10 years) have not identified concerning late effects or complications from TMS treatment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plain-Language References</h2>
          <ul className="space-y-2">
            <li>1. Rossi S, et al. (2021). "Safety and recommendations for TMS use in healthy subjects and patient populations." Clinical Neurophysiology 132(1):269-306.</li>
            <li>2. Loo CK, et al. (2008). "A review of the safety of repetitive transcranial magnetic stimulation as a clinical treatment for depression." International Journal of Neuropsychopharmacology 11(1):131-147.</li>
            <li>3. Perera T, et al. (2016). "The Clinical TMS Society Consensus Review and Treatment Recommendations for TMS Therapy for Major Depressive Disorder." Brain Stimulation 9(3):336-346.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/tms-101-what-to-expect" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS 101</h3>
                <p className="text-sm text-gray-600">Complete TMS overview</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-journey-week-by-week" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Week-by-Week Guide</h3>
                <p className="text-sm text-gray-600">Treatment timeline</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/managing-medication-side-effects" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Medication Side Effects</h3>
                <p className="text-sm text-gray-600">Compare to medication safety</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
