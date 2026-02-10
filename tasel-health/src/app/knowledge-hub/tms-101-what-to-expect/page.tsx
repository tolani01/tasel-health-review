import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, AlertCircle, Brain, Clock, Calendar, TrendingUp, Shield } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TMS Therapy Explained: What to Expect | Tasel Health Oklahoma City',
  description: 'Learn about TMS (Transcranial Magnetic Stimulation) therapy: how it works, who it helps, session details, and expected outcomes. Evidence-based guide from Tasel Health.',
  keywords: ['TMS therapy', 'transcranial magnetic stimulation', 'TMS treatment Oklahoma City', 'brain stimulation therapy', 'depression treatment', 'non-invasive mental health treatment'],
  openGraph: {
    title: 'TMS Therapy Explained: What to Expect',
    description: 'Comprehensive guide to TMS therapy: how it works, who it helps, and what to expect from treatment.',
    type: 'article',
  },
}

export default function TMS101Page() {
  const faqs = [
    {
      question: "Will TMS hurt?",
      answer: "Most people describe TMS as feeling like light tapping on the scalp. It's not painful, though some experience mild scalp discomfort during the first few sessions that typically lessens as your body adjusts."
    },
    {
      question: "Can I keep working during TMS treatment?",
      answer: "Yes! TMS is an outpatient procedure with no downtime. Most people continue working, driving, and maintaining their normal routines throughout treatment."
    },
    {
      question: "How long until I feel better?",
      answer: "Everyone's timeline is different. Some people notice improvements within 2-3 weeks, while others see gradual changes over 4-6 weeks. Full benefits often become more apparent after completing the full course of treatment."
    },
    {
      question: "Is TMS covered by insurance?",
      answer: "Many insurance plans cover TMS therapy for treatment-resistant depression. Our team will help verify your benefits and handle prior authorization requirements."
    },
    {
      question: "What if I'm on medication?",
      answer: "You can continue most medications during TMS. In fact, TMS often works well alongside medication management. Your psychiatrist will coordinate both treatments."
    },
    {
      question: "Are there any side effects?",
      answer: "The most common side effects are mild headache and scalp discomfort during or after sessions, which typically resolve quickly. Serious side effects like seizures are extremely rare (less than 0.1%)."
    },
    {
      question: "What happens after I complete treatment?",
      answer: "We'll monitor your progress and create a maintenance plan. Some people benefit from occasional 'booster' sessions to maintain improvements, while others find one course sufficient."
    },
    {
      question: "Can TMS help if I haven't tried medications?",
      answer: "TMS is FDA-cleared for people who haven't responded well to at least one antidepressant. It's not typically a first-line treatment, but your doctor can discuss whether it's appropriate for your situation."
    },
    {
      question: "How is Deep TMS different from regular TMS?",
      answer: "BrainsWay Deep TMS™ uses an H-Coil that reaches deeper brain structures (up to 6cm) compared to traditional figure-8 coils (1.5-2cm). This allows treatment of a broader range of conditions."
    },
    {
      question: "What should I avoid during TMS?",
      answer: "Avoid wearing anything with metal near your head (earrings, hairpins). Tell your doctor about any metal implants, medical devices, or history of seizures. Alcohol and recreational drugs should be avoided as they can affect results."
    }
  ]

  const keyTakeaways = [
    "TMS uses magnetic pulses to stimulate specific brain areas involved in mood regulation",
    "Most people complete 20-36 sessions over 4-6 weeks; benefits often build over time",
    "Common side effects are mild (scalp discomfort, headache) and usually fade",
    "We track progress with brief check-ins (like the PHQ-9) to measure improvement",
    "You can continue work, driving, and normal activities—no downtime required"
  ]

  const benefits = [
    { icon: Brain, title: "Targets brain chemistry", description: "Stimulates underactive areas involved in mood" },
    { icon: Shield, title: "Non-invasive", description: "No surgery, anesthesia, or sedation needed" },
    { icon: Clock, title: "Quick sessions", description: "20-30 minutes per session" },
    { icon: Calendar, title: "No downtime", description: "Return to normal activities immediately" }
  ]

  // FAQ Schema for SEO
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
        title="TMS 101: What to Expect from Brain Stimulation Therapy"
        summary="A complete guide to TMS therapy: how it works, who it helps, what sessions feel like, and what outcomes to expect."
        estimatedReadTime={12}
        lastReviewed="December 20, 2024"
        author="Tasel Health Clinical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['TMS', 'Depression', 'Treatment Overview', 'Non-invasive']}
      >
        {/* Key Takeaways */}
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

        {/* What TMS Is */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What TMS Is (Plain Language)</h2>
          <p className="mb-4">
            TMS stands for <strong>Transcranial Magnetic Stimulation</strong>. It's a noninvasive treatment that uses magnetic pulses—similar to an MRI—to gently stimulate specific areas of your brain involved in mood regulation.
          </p>
          <p className="mb-4">
            Think of it like a "reset button" for underactive brain regions. When you have depression, certain areas of your brain show less activity than usual. TMS helps wake up those areas, which can improve mood, energy, focus, and overall quality of life.
          </p>
          <p className="mb-4">
            At Tasel Health, we use <strong>BrainsWay Deep TMS™</strong>, which is FDA-cleared for treating major depressive disorder, OCD, and anxious depression. Deep TMS uses a specialized H-Coil that reaches deeper brain structures (up to 6cm) than traditional TMS, potentially offering more comprehensive treatment.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Works</h2>
          <p className="mb-4">
            During a TMS session, you sit in a comfortable chair while a specialized coil is positioned over your head. The coil delivers brief magnetic pulses—you'll feel a tapping sensation and hear clicking sounds.
          </p>
          <p className="mb-4">
            These magnetic pulses pass through your skull and stimulate nerve cells in the targeted brain region. This stimulation triggers a cascade of biological changes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Increases activity in underactive brain areas</li>
            <li>Helps balance neurotransmitters like serotonin and dopamine</li>
            <li>Strengthens neural connections (brain plasticity)</li>
            <li>May promote growth of new brain cells</li>
          </ul>
          <p className="mb-4">
            The effects are cumulative—each session builds on the last. That's why TMS requires multiple sessions over several weeks rather than a single treatment.
          </p>
        </section>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Who It May Help */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who TMS May Help</h2>
          <p className="mb-4">
            TMS is FDA-cleared for adults with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Major Depressive Disorder (MDD)</strong> - especially if you haven't responded well to at least one antidepressant</li>
            <li><strong>Obsessive-Compulsive Disorder (OCD)</strong> - when symptoms interfere with daily life</li>
            <li><strong>Anxious Depression</strong> - depression with significant anxiety symptoms</li>
          </ul>
          <p className="mb-4">
            TMS may be a good option if:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You've tried multiple medications without adequate relief</li>
            <li>Medication side effects are intolerable or concerning</li>
            <li>You prefer a non-medication approach</li>
            <li>You want to enhance the effects of current treatments</li>
          </ul>
        </section>

        {/* Who Should Not Use TMS */}
        <Card className="p-6 bg-amber-50 border-amber-200 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Important Safety Information</h3>
              <p className="mb-3">
                <strong>TMS may not be safe if you have:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Metal implants in or near your head (cochlear implants, aneurysm clips, deep brain stimulators)</li>
                <li>Metallic ink tattoos on your scalp (not on face or neck)</li>
                <li>A history of seizures or epilepsy</li>
                <li>Certain medical devices (some heart pacemakers, medication pumps)</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Tell your doctor about any metal in your body, medical devices, or health conditions. We'll conduct a thorough safety screening before starting treatment.
              </p>
            </div>
          </div>
        </Card>

        {/* What to Expect */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect: Before, During & After</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Before Your First Session</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Complete a safety screening and medical history review</li>
            <li>Remove earrings, hairpins, or other metal objects near your head</li>
            <li>Bring a list of current medications and supplements</li>
            <li>Wear comfortable clothing (you'll be sitting for 20-30 minutes)</li>
            <li>You can eat, drive, and follow your normal routine beforehand</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">During Treatment</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Sit in a comfortable reclining chair</li>
            <li>The TMS coil is positioned carefully over your head</li>
            <li>You'll wear earplugs to muffle the clicking sound</li>
            <li>Feel a tapping sensation on your scalp (not painful)</li>
            <li>Stay awake and alert—you can listen to music or watch TV</li>
            <li>Sessions last 20-30 minutes for most protocols</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">After Treatment</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Resume normal activities immediately—drive, work, exercise</li>
            <li>Some people have mild scalp tenderness or a light headache</li>
            <li>Over-the-counter pain relievers can help if needed</li>
            <li>Side effects typically lessen after the first week</li>
          </ul>
        </section>

        {/* Treatment Schedule */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Schedule & Timeline</h2>
          <p className="mb-4">
            A typical TMS course includes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Acute Phase:</strong> 20-36 sessions over 4-6 weeks, usually 5 days per week</li>
            <li><strong>Each Session:</strong> 20-30 minutes (Deep TMS for depression is typically 20 minutes)</li>
            <li><strong>Maintenance (if needed):</strong> Some people benefit from occasional booster sessions</li>
          </ul>
          <p className="mb-4">
            <strong>When to expect results:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Weeks 1-2: Getting adjusted; side effects may occur but typically lessen</li>
            <li>Weeks 2-3: Some people begin noticing subtle improvements</li>
            <li>Weeks 3-4: More people report mood improvements and increased energy</li>
            <li>Weeks 4-6: Benefits continue building; full response often seen by end of treatment</li>
          </ul>
        </section>

        {/* Success Rates */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Outcomes & Success Rates</h2>
          <p className="mb-4">
            Clinical research on BrainsWay Deep TMS™ for depression shows:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
              <div className="text-sm text-gray-600">Response Rate</div>
              <p className="text-xs text-gray-500 mt-2">Significant symptom improvement</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-teal-50 to-green-50">
              <div className="text-4xl font-bold text-teal-600 mb-2">58%</div>
              <div className="text-sm text-gray-600">Remission Rate</div>
              <p className="text-xs text-gray-500 mt-2">Minimal or no symptoms</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">20-36</div>
              <div className="text-sm text-gray-600">Sessions</div>
              <p className="text-xs text-gray-500 mt-2">Typical treatment course</p>
            </Card>
          </div>
          <p className="mb-4">
            <strong>Response</strong> means a significant reduction in symptoms (typically 50% or more improvement on depression rating scales). 
            <strong> Remission</strong> means symptoms have largely resolved.
          </p>
          <p className="mb-4 text-sm text-gray-600">
            <em>Individual results vary. Success rates are based on clinical trial data and real-world outcomes. Your response depends on factors like symptom severity, treatment adherence, and individual brain chemistry.</em>
          </p>
        </section>

        {/* Measuring Progress */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Track Your Progress</h2>
          <p className="mb-4">
            We use measurement-based care to objectively track your improvement:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>PHQ-9:</strong> Brief depression screening (9 questions, takes 2 minutes)</li>
            <li><strong>GAD-7:</strong> Anxiety assessment if you have significant anxiety</li>
            <li><strong>Weekly check-ins:</strong> You'll complete brief questionnaires so we can monitor trends</li>
            <li><strong>Collaborative review:</strong> We'll discuss your scores together and adjust the plan if needed</li>
          </ul>
          <p className="mb-4">
            These tools help us see what's working and make data-driven decisions about your care.
          </p>
        </section>

        {/* Safety & Side Effects */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety & Side Effects</h2>
          <p className="mb-4">
            TMS has an excellent safety profile. It's been used for millions of treatments worldwide.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Common Side Effects (generally mild)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Scalp discomfort or tingling</strong> during or after treatment (most common; usually fades after first week)</li>
            <li><strong>Mild headache</strong> after sessions (can take over-the-counter pain relief)</li>
            <li><strong>Facial twitching</strong> during pulses (temporary; adjusting coil position can help)</li>
            <li><strong>Lightheadedness</strong> (rare; usually related to sitting for extended periods)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Rare but Serious Risks</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Seizure:</strong> Extremely rare (less than 0.1% risk). We screen for seizure risk factors beforehand.</li>
            <li><strong>Hearing changes:</strong> Very rare if you wear earplugs as instructed.</li>
            <li><strong>Mania:</strong> Rare; we monitor for mood elevation, especially in bipolar disorder.</li>
          </ul>

          <p className="mb-4">
            <strong>Call your doctor if you experience:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Severe or worsening headaches</li>
            <li>Unusual mood changes or agitation</li>
            <li>Twitching that doesn't stop after treatment</li>
            <li>Hearing changes or ringing in ears</li>
            <li>Any other concerning symptoms</li>
          </ul>
        </section>

        {/* Insurance & Cost */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance & Costs</h2>
          <p className="mb-4">
            Many major insurance plans cover TMS for treatment-resistant depression, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>UnitedHealthcare</li>
            <li>Blue Cross Blue Shield</li>
            <li>Aetna</li>
            <li>Cigna</li>
            <li>Medicare (with documentation requirements)</li>
          </ul>
          <p className="mb-4">
            <strong>Prior authorization:</strong> Most insurance plans require documentation that you've tried and not fully responded to antidepressant medications. Our team will handle the authorization process for you.
          </p>
          <p className="mb-4">
            <strong>Self-pay options:</strong> If insurance doesn't cover TMS or you prefer to pay out-of-pocket, we offer transparent pricing and payment plans. Contact our billing team at <a href="tel:+14059341681" className="text-purple-600 hover:underline">(405) 934-1681</a> (Oklahoma City) or <a href="tel:+12102022341" className="text-purple-600 hover:underline">(210) 202-2341</a> (San Antonio) to discuss options.
          </p>
          <p className="mb-4">
            Learn more about <Link href="/insurance" className="text-purple-600 hover:underline">insurance coverage and payment options</Link>.
          </p>
        </section>

        {/* FAQs */}
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

        {/* Crisis Resources */}
        <Card className="p-6 bg-red-50 border-red-200 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">In a Crisis?</h3>
              <p className="mb-3 text-gray-700">
                If you're in immediate danger or thinking about hurting yourself, please get help right away:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">Call 911</span>
                  <span className="text-gray-600">for emergency services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">Call or Text 988</span>
                  <span className="text-gray-600">Suicide & Crisis Lifeline (24/7, free, confidential)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">Text HELLO to 741741</span>
                  <span className="text-gray-600">Crisis Text Line</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* References */}
        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plain-Language References</h2>
          <ul className="space-y-2">
            <li>
              1. FDA Clearance: <a href="https://www.fda.gov/news-events/press-announcements/fda-permits-marketing-transcranial-magnetic-stimulation-treatment-obsessive-compulsive-disorder" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">FDA permits marketing of transcranial magnetic stimulation for OCD</a>
            </li>
            <li>
              2. BrainsWay Clinical Data: <a href="https://www.brainsway.com/knowledge-center/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">BrainsWay Knowledge Center - Clinical Studies</a>
            </li>
            <li>
              3. Success rates based on: Levkovitz Y, et al. (2015). "Efficacy and safety of deep transcranial magnetic stimulation for major depression." World Psychiatry.
            </li>
            <li>
              4. Safety data: Rossi S, et al. (2021). "Safety and recommendations for TMS use in healthy subjects and patient populations." Clinical Neurophysiology.
            </li>
          </ul>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/tms-vs-medication" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS vs. Medication</h3>
                <p className="text-sm text-gray-600">Compare treatment options and timelines</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-journey-week-by-week" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Week-by-Week TMS Guide</h3>
                <p className="text-sm text-gray-600">Detailed timeline of your TMS journey</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-for-depression-evidence" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS for Depression: The Evidence</h3>
                <p className="text-sm text-gray-600">Clinical research and outcomes data</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      
      <StillHaveQuestions />
    </>
  )
}
