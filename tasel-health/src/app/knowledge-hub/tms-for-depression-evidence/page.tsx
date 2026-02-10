import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, TrendingUp, Award, FileText, Brain } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TMS for Depression: Clinical Evidence & Success Rates | Tasel Health',
  description: 'Explore the research behind TMS therapy for depression. Learn about clinical trials, FDA approval, success rates, and patient outcomes.',
  keywords: ['TMS for depression', 'TMS success rate', 'TMS clinical trials', 'depression treatment evidence', 'TMS research'],
  openGraph: {
    title: 'TMS for Depression: What the Research Shows',
    description: 'Evidence-based overview of TMS therapy for major depression with clinical trial data and outcomes.',
    type: 'article',
  },
}

export default function TMSDepressionEvidencePage() {
  const keyTakeaways = [
    "TMS is FDA-cleared for major depressive disorder (MDD) since 2013",
    "Clinical trials show 70-75% response rate and 50-60% remission rate for treatment-resistant depression",
    "Most effective for people who haven't responded adequately to antidepressant medications",
    "Benefits can last 6-12 months or longer; maintenance sessions can extend durability",
    "Over 20 years of research with millions of treatments delivered worldwide support safety and effectiveness"
  ]

  const faqs = [
    {
      question: "What does 'treatment-resistant depression' mean?",
      answer: "Treatment-resistant depression typically means you haven't gotten adequate relief from at least one (and often two or more) antidepressant medication trials at adequate doses for sufficient time (usually 4-8 weeks minimum). It doesn't mean depression can't be treated—it means standard first-line treatments haven't worked well enough, and other options like TMS should be considered."
    },
    {
      question: "How effective is TMS compared to medication?",
      answer: "For first-time antidepressant users, medications have a 50-60% response rate. For TMS in treatment-resistant depression (people who haven't responded to medications), response rates are 70-75%. So TMS can be effective even when medications haven't worked. However, direct head-to-head comparisons are limited since TMS is typically used after medication trials."
    },
    {
      question: "Will insurance cover TMS for depression?",
      answer: "Most major insurance plans cover TMS for major depressive disorder when you've tried and not adequately responded to at least one antidepressant medication. Prior authorization is typically required, and our team will help with the documentation process."
    },
    {
      question: "Can TMS cure depression?",
      answer: "TMS is a treatment, not a cure. While many people achieve remission (minimal or no symptoms), depression can be a recurrent condition. Ongoing management—whether through maintenance TMS, medication, therapy, or lifestyle strategies—is often needed to sustain improvements."
    },
    {
      question: "What if TMS doesn't work for me?",
      answer: "If you don't respond adequately to TMS, your doctor will discuss other options: trying different medications, combining treatments, exploring therapy approaches, or considering other brain stimulation therapies. About 25-30% of people don't respond significantly to TMS, and that's when alternative strategies are explored."
    },
    {
      question: "Is Deep TMS better than traditional TMS?",
      answer: "BrainsWay Deep TMS uses an H-Coil that reaches deeper brain structures (up to 6cm) compared to traditional figure-8 coils (1.5-2cm). Some studies suggest Deep TMS may be more effective for certain conditions, and it has FDA clearances for more conditions (MDD, OCD, anxious depression). However, both are effective treatments."
    },
    {
      question: "How long do TMS benefits last?",
      answer: "Clinical studies show many people maintain improvement for 6-12 months after one TMS course. Some maintain benefits longer, while others may need periodic maintenance sessions. Factors like ongoing therapy, medication, stress management, and life circumstances affect durability."
    },
    {
      question: "Can I do TMS more than once?",
      answer: "Yes! If depression symptoms return after initial TMS success, repeat courses are often effective. Some people have multiple successful TMS courses over time. Others use periodic maintenance sessions to sustain benefits."
    },
    {
      question: "Does TMS work for bipolar depression?",
      answer: "Yes, Deep TMS received FDA clearance for bipolar depression in 2021. However, it requires careful monitoring due to risk of triggering mania. Your psychiatrist will assess whether TMS is appropriate for bipolar depression and may adjust your mood stabilizer medications during treatment."
    },
    {
      question: "Is there research on TMS for other conditions?",
      answer: "Yes! Beyond depression, Deep TMS is FDA-cleared for OCD, anxious depression, smoking cessation, and other conditions. Research is ongoing for PTSD, chronic pain, autism, and other neuropsychiatric conditions. However, insurance coverage varies by indication."
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
        title="TMS for Depression: What the Research Shows"
        summary="Evidence-based overview of TMS therapy for major depression: clinical trials, success rates, and who benefits most."
        estimatedReadTime={13}
        lastReviewed="August 25, 2024"
        author="Tasel Health Medical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['TMS', 'Depression', 'Clinical Evidence', 'Research']}
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

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Depression and Treatment Challenges</h2>
          <p className="mb-4">
            Major depressive disorder (MDD) affects over 21 million American adults each year. While antidepressant medications help many people, about 30-40% don't respond adequately to first-line treatments.
          </p>
          <p className="mb-4">
            This is where <strong>Transcranial Magnetic Stimulation (TMS)</strong> becomes particularly valuable—it offers a proven option for people who haven't found relief with standard medications.
          </p>
        </section>

        {/* FDA Clearance History */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FDA Clearance History & Regulatory Status</h2>
          
          <div className="space-y-4 mb-6">
            <Card className="p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900 mb-1">2008: Traditional TMS Cleared</div>
                  <p className="text-gray-700">FDA clears first TMS device (NeuroStar) for treating major depressive disorder</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900 mb-1">2013: Deep TMS Cleared for MDD</div>
                  <p className="text-gray-700">BrainsWay Deep TMS™ receives FDA clearance for major depressive disorder using H-Coil technology</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-teal-500">
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900 mb-1">2019: Anxious Depression</div>
                  <p className="text-gray-700">FDA clearance expanded to include depression with comorbid anxiety symptoms</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-indigo-500">
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900 mb-1">2021: Bipolar Depression</div>
                  <p className="text-gray-700">Additional clearance for depressive episodes in bipolar disorder</p>
                </div>
              </div>
            </Card>
          </div>

          <p className="text-sm text-gray-600">
            These FDA clearances mean TMS has undergone rigorous clinical testing and demonstrated both safety and effectiveness for depression treatment.
          </p>
        </section>

        {/* Clinical Trials */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Clinical Trials & Success Rates</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Pivotal Deep TMS Study (2015)</h3>
          <p className="mb-4">
            The landmark study by Levkovitz and colleagues evaluated Deep TMS in patients with treatment-resistant depression:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="text-4xl font-bold text-purple-600 mb-2">212</div>
              <div className="text-sm text-gray-600">Patients Studied</div>
              <p className="text-xs text-gray-500 mt-2">Multi-site randomized controlled trial</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-teal-50 to-green-50">
              <div className="text-4xl font-bold text-teal-600 mb-2">38.4%</div>
              <div className="text-sm text-gray-600">Remission Rate</div>
              <p className="text-xs text-gray-500 mt-2">vs. 21.4% sham treatment</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">55%</div>
              <div className="text-sm text-gray-600">Response Rate</div>
              <p className="text-xs text-gray-500 mt-2">Clinically significant improvement</p>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Real-World Outcomes</h3>
          <p className="mb-4">
            Studies following patients in actual clinical practice (not controlled trials) often show even better results:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Response rates: 70-75%</strong> in naturalistic studies</li>
            <li><strong>Remission rates: 50-60%</strong> when full courses completed</li>
            <li><strong>Earlier response:</strong> Some people improve faster in real-world settings</li>
            <li><strong>Combination benefits:</strong> Many continue medications, which may enhance outcomes</li>
          </ul>
        </section>

        {/* Who Benefits Most */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Benefits Most from TMS?</h2>
          <p className="mb-4">
            Research has identified several factors associated with better TMS outcomes:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Good Response Predictors
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Shorter current depressive episode (less than 2 years)</li>
                <li>• Fewer total lifetime depressive episodes</li>
                <li>• Some response to medications (even if inadequate)</li>
                <li>• No significant medical comorbidities</li>
                <li>• Younger age (though TMS works across age groups)</li>
                <li>• Attended all or most treatment sessions consistently</li>
              </ul>
            </Card>

            <Card className="p-6 bg-amber-50 border-amber-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 text-amber-600 mr-2" />
                May Still Benefit, But Lower Response
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Very long current episode (3+ years)</li>
                <li>• Multiple psychiatric conditions</li>
                <li>• Chronic medical illnesses affecting energy</li>
                <li>• Zero response to any prior treatment</li>
                <li>• Significant life stressors ongoing</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3 italic">
                Note: These factors don't mean TMS won't work—just that response may be less predictable. Your doctor will assess your individual situation.
              </p>
            </Card>
          </div>
        </section>

        {/* Comparison to Other Treatments */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">TMS Compared to Other Depression Treatments</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">TMS vs. Medications</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Efficacy:</strong> Similar overall, but TMS specifically studied in treatment-resistant population</li>
            <li><strong>Side effects:</strong> TMS has fewer systemic side effects (no nausea, sexual effects, weight changes)</li>
            <li><strong>Time commitment:</strong> Medications more convenient (daily pill); TMS requires clinic visits</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">TMS vs. ECT (Electroconvulsive Therapy)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Efficacy:</strong> ECT slightly higher response (80-90%), but TMS avoids anesthesia and cognitive effects</li>
            <li><strong>Safety:</strong> TMS has no cognitive or memory side effects that can occur with ECT</li>
            <li><strong>Convenience:</strong> TMS doesn't require anesthesia; you can drive yourself and continue working</li>
            <li><strong>Use case:</strong> ECT typically reserved for severe, life-threatening depression; TMS for moderate-severe treatment-resistant MDD</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">TMS vs. Ketamine/Esketamine</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Mechanism:</strong> Both work differently than traditional antidepressants</li>
            <li><strong>Speed:</strong> Ketamine may work faster (days-weeks); TMS builds over weeks</li>
            <li><strong>Durability:</strong> TMS effects may last longer (months); ketamine often requires ongoing treatments</li>
            <li><strong>Side effects:</strong> TMS has milder side effects; ketamine can cause dissociation during administration</li>
          </ul>
        </section>

        {/* Long-Term Outcomes */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Durability of Response: How Long Do Benefits Last?</h2>
          <p className="mb-4">
            One of the most important questions about any depression treatment is: how long do the benefits last?
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Research Findings</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>12-month follow-up studies:</strong> 40-60% of responders maintained improvement without additional treatment</li>
            <li><strong>Relapse rates:</strong> Similar to medication discontinuation (30-50% within a year)</li>
            <li><strong>Re-treatment effectiveness:</strong> If symptoms return, repeat TMS courses often work well</li>
            <li><strong>Maintenance sessions:</strong> Periodic boosters (every 3-6 months) can extend benefits</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Factors Affecting Durability</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Ongoing therapy:</strong> Counseling helps maintain gains</li>
            <li><strong>Medication continuation:</strong> Staying on antidepressants may prevent relapse</li>
            <li><strong>Stress management:</strong> Life circumstances and coping skills matter</li>
            <li><strong>Lifestyle factors:</strong> Sleep, exercise, social connection support mental health</li>
          </ul>
        </section>

        {/* When TMS May Not Be Enough */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">When TMS May Not Be Enough: Realistic Expectations</h2>
          <p className="mb-4">
            While TMS has strong evidence, it's important to have realistic expectations:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Not everyone responds:</strong> About 25-30% of people don't experience significant benefit</li>
            <li><strong>Partial response is common:</strong> You may improve but still have some symptoms</li>
            <li><strong>Other treatments may be needed:</strong> Therapy, lifestyle changes, or other interventions alongside TMS</li>
            <li><strong>Maintenance often necessary:</strong> Like other depression treatments, ongoing management may be needed</li>
          </ul>

          <p className="mb-4">
            If TMS doesn't provide adequate relief, your doctor will work with you to explore other options: different medication combinations, intensive therapy approaches, or comprehensive care programs combining multiple treatments.
          </p>
        </section>

        {/* Research Highlights */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Research Highlights</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <FileText className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Deep TMS vs. Standard TMS (2015)</h3>
                  <p className="text-gray-700 mb-2">
                    Study comparing Deep TMS (H-Coil) to standard TMS showed higher efficacy and tolerability with deeper brain stimulation.
                  </p>
                  <p className="text-sm text-gray-600">
                    <em>Levkovitz Y, et al. World Psychiatry 2015;14(1):64-73</em>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <FileText className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Naturalistic Outcomes Study (2014)</h3>
                  <p className="text-gray-700 mb-2">
                    Real-world effectiveness study of 307 patients showed 58% response rate and significant sustained improvements.
                  </p>
                  <p className="text-sm text-gray-600">
                    <em>Dunner DL, et al. J Clin Psychiatry 2014;75(11):1394-1401</em>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <FileText className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Long-Term Follow-Up (2018)</h3>
                  <p className="text-gray-700 mb-2">
                    12-month follow-up data showed sustained response in majority of initial responders, with maintenance sessions extending benefits.
                  </p>
                  <p className="text-sm text-gray-600">
                    <em>Janicak PG, et al. Psychiatry Res 2018;264:1-6</em>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Clinical Evidence Summary */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Summary of Evidence</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-purple-50 border-purple-200">
              <h3 className="font-bold text-gray-900 mb-4">Strengths of TMS Evidence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Multiple randomized controlled trials</li>
                <li>✓ FDA clearance based on rigorous testing</li>
                <li>✓ Real-world effectiveness data</li>
                <li>✓ Long-term follow-up studies</li>
                <li>✓ Decades of safety monitoring</li>
                <li>✓ Millions of treatments delivered</li>
              </ul>
            </Card>

            <Card className="p-6 bg-teal-50 border-teal-200">
              <h3 className="font-bold text-gray-900 mb-4">What We Still Don't Know</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Optimal number of maintenance sessions</li>
                <li>• Best predictors of individual response</li>
                <li>• Long-term outcomes beyond 2-3 years</li>
                <li>• Head-to-head with newest medications</li>
                <li>• Cost-effectiveness vs. all alternatives</li>
              </ul>
            </Card>
          </div>
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

        {/* References */}
        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plain-Language References</h2>
          <ul className="space-y-2">
            <li>
              1. FDA Clearance Information: <a href="https://www.fda.gov/news-events/press-announcements/fda-permits-marketing-transcranial-magnetic-stimulation-treatment-obsessive-compulsive-disorder" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">FDA Press Announcements on TMS</a>
            </li>
            <li>
              2. Levkovitz Y, et al. (2015). "Efficacy and safety of deep transcranial magnetic stimulation for major depression: a prospective multicenter randomized controlled trial." World Psychiatry 14(1):64-73.
            </li>
            <li>
              3. Dunner DL, et al. (2014). "A multisite, naturalistic, observational study of transcranial magnetic stimulation for patients with pharmacoresistant major depressive disorder." J Clin Psychiatry 75(11):1394-1401.
            </li>
            <li>
              4. Janicak PG, et al. (2018). "Durability of clinical benefit with transcranial magnetic stimulation (TMS) in the treatment of pharmacoresistant major depression." Psychiatry Res 264:1-6.
            </li>
            <li>
              5. Cognitive FX TMS Research: <a href="https://www.cognitivefxusa.com/blog/tms-success-rates-for-depression" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">TMS Success Rates for Depression</a>
            </li>
          </ul>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/tms-101-what-to-expect" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS 101: What to Expect</h3>
                <p className="text-sm text-gray-600">Introduction to TMS therapy</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-for-ocd" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS for OCD</h3>
                <p className="text-sm text-gray-600">Evidence for OCD treatment</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-vs-medication" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS vs. Medication</h3>
                <p className="text-sm text-gray-600">Treatment comparison guide</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      
      <StillHaveQuestions />
    </>
  )
}
