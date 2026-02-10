import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Calendar, Activity, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TMS Treatment Timeline: Week-by-Week Patient Guide | Tasel Health',
  description: 'Follow a detailed week-by-week guide to your TMS therapy journey. Know what to expect, how to prepare, and when to see results.',
  keywords: ['TMS timeline', 'TMS treatment schedule', 'TMS week by week', 'what to expect during TMS', 'TMS therapy guide'],
  openGraph: {
    title: 'Your TMS Journey: Week-by-Week Guide',
    description: 'Detailed timeline of what to expect during your complete TMS treatment course.',
    type: 'article',
  },
}

export default function TMSJourneyPage() {
  const keyTakeaways = [
    "TMS treatment typically lasts 4-6 weeks with daily sessions Monday through Friday",
    "Week 1 focuses on adjustment and brain mapping; mild side effects are common",
    "Weeks 2-3 often bring early improvements and reduced side effects",
    "Weeks 4-6 solidify gains; most people see their best results by treatment end",
    "Consistency is crucial—attending all sessions gives you the best chance of success"
  ]

  const faqs = [
    {
      question: "What should I bring to my first TMS session?",
      answer: "Bring your ID, insurance card, list of current medications, and any medical records related to prior depression treatments. Remove all metal jewelry from your head and neck area (earrings, hairpins, necklaces). Wear comfortable clothing."
    },
    {
      question: "Can I work during TMS treatment?",
      answer: "Yes! Most people continue working full-time during TMS. Sessions last only 20-30 minutes, and there's no downtime afterward. You can drive yourself to and from sessions and resume all normal activities immediately."
    },
    {
      question: "What if I miss a TMS session?",
      answer: "Try to avoid missing sessions, as consistency is important for optimal results. If you must miss a session due to illness or emergency, contact the clinic as soon as possible. Your treatment course may be extended to ensure you receive the full number of sessions."
    },
    {
      question: "When will I start feeling better?",
      answer: "Everyone's timeline is different. Some people notice subtle improvements as early as week 2-3, while others see more gradual changes through weeks 4-6. Full benefits often become more apparent after completing the entire treatment course. Your doctor will track progress with you throughout."
    },
    {
      question: "What if I don't notice any changes by week 3?",
      answer: "Don't get discouraged. Some people are 'late responders' who see benefits later in the course or even in the weeks after treatment ends. We'll monitor your progress with standardized tools (like PHQ-9) and discuss whether to continue, extend, or adjust the treatment plan."
    },
    {
      question: "Can I exercise during TMS treatment?",
      answer: "Yes, you can maintain your normal exercise routine. In fact, exercise can complement TMS by supporting mood and overall mental health. Just avoid intense exercise immediately before sessions if it causes discomfort."
    },
    {
      question: "Should I avoid alcohol during TMS?",
      answer: "It's best to minimize or avoid alcohol during TMS treatment. Alcohol can interfere with brain chemistry, affect your mood tracking, and potentially increase seizure risk (though seizures are extremely rare). Discuss any alcohol use with your doctor."
    },
    {
      question: "What if side effects don't go away after week 1?",
      answer: "Most side effects (scalp discomfort, mild headache) lessen significantly after the first week. If they persist, tell your TMS technician—they can adjust coil placement, stimulation intensity, or other parameters to improve comfort. Persistent or worsening side effects should be reported to your doctor."
    },
    {
      question: "Can I drive myself to and from TMS sessions?",
      answer: "Yes! Unlike ECT (electroconvulsive therapy), TMS doesn't require anesthesia or sedation. You can safely drive yourself to and from sessions and continue all normal activities."
    },
    {
      question: "What should I track during treatment?",
      answer: "Keep a simple daily log of mood (1-10 scale), energy level, sleep quality, and any side effects. We'll also have you complete brief questionnaires (like PHQ-9 for depression) weekly to objectively track progress. Note any positive changes, even subtle ones."
    },
    {
      question: "Will I need maintenance TMS sessions after finishing?",
      answer: "Some people maintain their improvements without additional treatment. Others benefit from occasional 'booster' sessions (e.g., one week every 3-6 months). Your doctor will create a maintenance plan based on how you respond and your individual needs."
    },
    {
      question: "How long do TMS results typically last?",
      answer: "Research shows TMS benefits can last months to years. In clinical studies, many people maintained improvement for 6-12 months or longer. Factors like ongoing therapy, lifestyle, stress management, and medication (if applicable) can help sustain gains."
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Prepare for and Complete a TMS Treatment Course",
    "description": "Step-by-step guide to preparing for and successfully completing TMS therapy for depression",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Prepare for Treatment",
        "text": "Gather medical records, arrange transportation, plan your schedule for 4-6 weeks of daily sessions"
      },
      {
        "@type": "HowToStep",
        "name": "Complete Brain Mapping",
        "text": "First session includes precise targeting and calibration for your treatment"
      },
      {
        "@type": "HowToStep",
        "name": "Attend Daily Sessions",
        "text": "Come in 5 days per week for 20-30 minute sessions, maintain consistency"
      },
      {
        "@type": "HowToStep",
        "name": "Track Your Progress",
        "text": "Complete mood questionnaires, note improvements, report any concerns"
      },
      {
        "@type": "HowToStep",
        "name": "Plan Maintenance",
        "text": "Work with your doctor to create a follow-up plan to maintain improvements"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      <ArticleLayout
        title="Your TMS Journey: Week-by-Week Guide"
        summary="A detailed timeline of what to expect during your TMS treatment course, from your first session through follow-up care."
        estimatedReadTime={15}
        lastReviewed="October 4, 2024"
        author="Tasel Health Medical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['TMS', 'Treatment Timeline', 'Patient Guide', 'Week by Week']}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect: Your Complete TMS Journey</h2>
          <p className="mb-4">
            Starting TMS therapy is a significant step toward better mental health. Knowing what to expect each week can help you feel prepared and confident throughout your treatment.
          </p>
          <p className="mb-4">
            This guide walks you through a typical 6-week TMS course, from your very first session to planning for long-term wellness after treatment ends.
          </p>
        </section>

        {/* Before You Start */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Before You Start: Preparation Checklist</h2>
          <Card className="p-6 bg-purple-50 border-purple-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete These Steps Before Your First Session:</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Insurance Verification:</strong>
                  <p className="text-sm text-gray-600">Our team will handle prior authorization, but confirm your coverage and any out-of-pocket costs.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Schedule Planning:</strong>
                  <p className="text-sm text-gray-600">Block out time for 4-6 weeks of daily sessions (M-F). Arrange work flexibility if needed.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Medical Records:</strong>
                  <p className="text-sm text-gray-600">Gather documentation of previous antidepressant trials for insurance requirements.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Transportation:</strong>
                  <p className="text-sm text-gray-600">Plan how you'll get to daily appointments (you can drive yourself).</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Safety Screening:</strong>
                  <p className="text-sm text-gray-600">Complete questionnaire about metal implants, seizure history, and medical conditions.</p>
                </div>
              </li>
            </ul>
          </Card>
        </section>

        {/* Week 1 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            <Calendar className="h-8 w-8 text-purple-600 mr-3" />
            Week 1: Getting Adjusted
          </h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">What Happens</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Brain Mapping (Motor Threshold):</strong> Your first session includes finding the right stimulation intensity for your brain</li>
            <li><strong>Coil Positioning:</strong> Precise placement over the target brain area (left dorsolateral prefrontal cortex for depression)</li>
            <li><strong>First Treatments:</strong> You'll begin your regular treatment schedule</li>
            <li><strong>Sensation:</strong> Tapping on scalp, clicking sounds (earplugs provided)</li>
            <li><strong>Duration:</strong> 20-30 minutes per session</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Common Experiences</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Scalp Discomfort:</strong> Most common in week 1; usually lessens with each session</li>
            <li><strong>Mild Headache:</strong> Can occur after sessions; over-the-counter pain relievers can help</li>
            <li><strong>Facial Twitching:</strong> Normal during magnetic pulses; temporary</li>
            <li><strong>Fatigue:</strong> Some people feel tired after first few sessions</li>
          </ul>

          <Card className="p-6 bg-teal-50 border-teal-200">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 text-teal-600 mr-2" />
              Tips for Week 1 Success
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Stay hydrated—drink water before and after sessions</li>
              <li>• Take over-the-counter pain reliever if you develop headache</li>
              <li>• Communicate with your TMS technician about comfort level</li>
              <li>• Keep your schedule clear for the full 4-6 weeks</li>
              <li>• Start a simple mood journal to track changes</li>
            </ul>
          </Card>
        </section>

        {/* Week 2 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            <Calendar className="h-8 w-8 text-purple-600 mr-3" />
            Week 2: Finding Your Rhythm
          </h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">What to Expect</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Side Effects Lessening:</strong> Scalp discomfort and headaches typically decrease</li>
            <li><strong>Routine Established:</strong> Sessions become more familiar and comfortable</li>
            <li><strong>First Mood Assessment:</strong> Complete PHQ-9 or similar to track baseline progress</li>
            <li><strong>Early Responders:</strong> About 20-30% of people notice subtle mood shifts</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">What You Might Notice</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Slightly better sleep quality or easier time falling asleep</li>
            <li>Small increases in energy or motivation</li>
            <li>Reduction in physical tension or restlessness</li>
            <li>More mental clarity or focus during the day</li>
          </ul>
          <p className="text-sm text-gray-600 italic">
            Note: Not everyone notices changes this early—that's completely normal. Benefits build cumulatively.
          </p>
        </section>

        {/* Weeks 3-4 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
            Weeks 3-4: Building Momentum
          </h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">What to Expect</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Side Effects Minimal:</strong> Most people experience little to no scalp discomfort by now</li>
            <li><strong>Routine Comfort:</strong> Sessions feel quick and easy</li>
            <li><strong>Mid-Treatment Assessment:</strong> Your doctor reviews progress and discusses any adjustments</li>
            <li><strong>More Responders:</strong> 50-70% of eventual responders notice improvements by week 4</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Common Improvements</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>More consistent energy throughout the day</li>
            <li>Improved ability to concentrate or complete tasks</li>
            <li>Better sleep patterns (falling asleep faster, staying asleep)</li>
            <li>More interest in activities you used to enjoy</li>
            <li>Reduced feelings of hopelessness or negativity</li>
            <li>Easier time getting out of bed in the morning</li>
          </ul>

          <Card className="p-6 bg-amber-50 border-amber-200">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Important: Consistency Matters</h3>
                <p className="text-gray-700">
                  Weeks 3-4 are critical. Even if you're not seeing major changes yet, attending all sessions gives your brain the cumulative stimulation needed for optimal results. Don't give up—many people see their biggest improvements in weeks 4-6.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Weeks 5-6 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            <Activity className="h-8 w-8 text-purple-600 mr-3" />
            Weeks 5-6: Solidifying Gains
          </h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">What to Expect</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Final Sessions:</strong> Complete your full course (usually 20-36 total sessions)</li>
            <li><strong>Progress Assessment:</strong> Comprehensive evaluation of treatment response</li>
            <li><strong>Response Patterns:</strong> Most people see their maximum benefit by week 6</li>
            <li><strong>Planning Ahead:</strong> Discuss maintenance strategy with your doctor</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Signs of Response</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Sustained improvements in mood and outlook</li>
            <li>Better ability to handle stress and daily challenges</li>
            <li>Improved social engagement and relationships</li>
            <li>Reduced depressive thoughts and rumination</li>
            <li>Higher overall functioning at work or home</li>
          </ul>

          <p className="mb-4">
            <strong>What if I'm still not feeling better?</strong> Some people are late responders who improve in the weeks after treatment ends. Your doctor may recommend extending treatment, adjusting parameters, or exploring combination approaches.
          </p>
        </section>

        {/* Week-by-Week Progress Tracker */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Week-by-Week Progress Tracker</h2>
          
          <div className="space-y-4">
            {[
              {
                week: "Week 1",
                sessions: "5 sessions",
                focus: "Brain mapping & adjustment",
                commonExperience: "Scalp discomfort, getting used to sensation",
                moodChanges: "Usually minimal; focus on completing sessions"
              },
              {
                week: "Week 2",
                sessions: "10 sessions total",
                focus: "Building consistency",
                commonExperience: "Side effects lessening",
                moodChanges: "Some people notice subtle energy or sleep improvements"
              },
              {
                week: "Week 3",
                sessions: "15 sessions total",
                focus: "Cumulative effects building",
                commonExperience: "Sessions feel routine and comfortable",
                moodChanges: "More people reporting mood shifts, increased motivation"
              },
              {
                week: "Week 4",
                sessions: "20 sessions total",
                focus: "Mid-course assessment",
                commonExperience: "Side effects rare; sessions quick",
                moodChanges: "Noticeable improvements in mood, energy, concentration"
              },
              {
                week: "Week 5",
                sessions: "25 sessions total",
                focus: "Solidifying response",
                commonExperience: "Treatment feels easy and brief",
                moodChanges: "Continued improvement; better functioning"
              },
              {
                week: "Week 6",
                sessions: "30+ sessions (course complete)",
                focus: "Final sessions & planning",
                commonExperience: "Reflecting on progress made",
                moodChanges: "Maximum benefit typically achieved; planning maintenance"
              }
            ].map((weekData, index) => (
              <Card key={index} className="p-6 border-l-4 border-purple-500">
                <div className="grid md:grid-cols-5 gap-4">
                  <div>
                    <div className="text-lg font-bold text-purple-600">{weekData.week}</div>
                    <div className="text-sm text-gray-600">{weekData.sessions}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">Focus</div>
                    <div className="text-sm text-gray-600">{weekData.focus}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">Physical Experience</div>
                    <div className="text-sm text-gray-600">{weekData.commonExperience}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Mood & Mental State</div>
                    <div className="text-sm text-gray-600">{weekData.moodChanges}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips for Success */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Success Throughout Treatment</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-3">Practical Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Attend all sessions:</strong> Consistency is key for best results</li>
                <li>• <strong>Communicate openly:</strong> Tell your team about any concerns or side effects</li>
                <li>• <strong>Stay on medications:</strong> Unless your doctor advises otherwise</li>
                <li>• <strong>Maintain routines:</strong> Continue work, exercise, and social activities</li>
                <li>• <strong>Be patient:</strong> Benefits build over time</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-3">What to Track</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Mood rating:</strong> Daily 1-10 scale</li>
                <li>• <strong>Sleep quality:</strong> Hours slept, ease of falling asleep</li>
                <li>• <strong>Energy level:</strong> Morning vs. afternoon patterns</li>
                <li>• <strong>Physical symptoms:</strong> Headaches, discomfort, any side effects</li>
                <li>• <strong>Positive changes:</strong> Even subtle improvements matter</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* After Treatment Ends */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">After Treatment Ends: What's Next?</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Evaluating Response</h3>
          <p className="mb-4">
            At the end of your TMS course, you'll complete a comprehensive assessment to evaluate:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Overall symptom reduction (using standardized scales like PHQ-9)</li>
            <li>Functional improvements (work, relationships, daily activities)</li>
            <li>Quality of life changes</li>
            <li>Whether additional treatment is recommended</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Maintenance Options</h3>
          <p className="mb-4">
            Depending on your response, your doctor may recommend:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>No additional TMS:</strong> Many people maintain improvements without further treatment</li>
            <li><strong>Booster sessions:</strong> Periodic single sessions or mini-courses (e.g., 5-10 sessions every 3-6 months)</li>
            <li><strong>Medication continuation:</strong> Staying on antidepressants to maintain gains</li>
            <li><strong>Therapy support:</strong> Ongoing counseling to build on TMS improvements</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Durability of Results</h3>
          <p className="mb-4">
            Research on TMS shows:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Many people maintain improvement for 6-12 months or longer after one course</li>
            <li>Relapse rates are similar to medication discontinuation</li>
            <li>Combining TMS with therapy or medication may help sustain benefits</li>
            <li>If symptoms return, repeat TMS courses are often effective</li>
          </ul>
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
              1. Treatment timeline and response patterns: Levkovitz Y, et al. (2015). "Efficacy and safety of deep transcranial magnetic stimulation for major depression." World Psychiatry.
            </li>
            <li>
              2. Side effect profiles and timeline: Rossi S, et al. (2021). "Safety and recommendations for TMS use." Clinical Neurophysiology.
            </li>
            <li>
              3. Durability of TMS response: Dunner DL, et al. (2014). "A multisite, naturalistic, observational study of transcranial magnetic stimulation for patients with pharmacoresistant major depressive disorder." Journal of Clinical Psychiatry.
            </li>
            <li>
              4. Maintenance strategies: Richieri R, et al. (2013). "Maintenance transcranial magnetic stimulation reduces depression relapse." Journal of Affective Disorders.
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
                <p className="text-sm text-gray-600">Complete introduction to TMS therapy</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-side-effects-safety" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS Side Effects & Safety</h3>
                <p className="text-sm text-gray-600">Comprehensive safety information</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-for-depression-evidence" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS for Depression: The Evidence</h3>
                <p className="text-sm text-gray-600">Clinical research and outcomes</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      
      <StillHaveQuestions />
    </>
  )
}
