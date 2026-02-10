import { Metadata } from 'next'
import Script from 'next/script'
import { SpravatoKetamineHeroSection } from '@/components/sections/spravato-ketamine-hero-section'
import { SpravatoKetamineOverview } from '@/components/sections/spravato-ketamine-overview'
import { SpravatoKetamineProcess } from '@/components/sections/spravato-ketamine-process'
import { SpravatoKetamineFAQ } from '@/components/sections/spravato-ketamine-faq'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'Spravato® & Ketamine Treatment in San Antonio & Oklahoma City | Tasel Health',
  description: 'FDA-approved Spravato® (esketamine) and ketamine therapy for treatment-resistant depression. Rapid relief when other treatments haven\'t worked. Serving San Antonio, TX and Oklahoma City, OK.',
  keywords: [
    'Spravato San Antonio',
    'Ketamine treatment San Antonio',
    'esketamine therapy',
    'treatment-resistant depression',
    'Spravato Oklahoma City',
    'ketamine infusion therapy',
    'depression treatment',
    'rapid depression relief'
  ],
  openGraph: {
    title: 'Spravato® & Ketamine Treatment | Tasel Health',
    description: 'FDA-approved Spravato® and ketamine therapy for treatment-resistant depression. Rapid relief when other treatments haven\'t worked.',
    type: 'website',
    images: [
      {
        url: '/images/spravato-ketamine-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Spravato and Ketamine Treatment',
      },
    ],
  },
}

export default function SpravatoKetaminePage() {
  return (
    <main className="min-h-screen">
      {/* FAQPage schema for Spravato/Ketamine page */}
      <Script id="faq-spravato-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Spravato® and how does it work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Spravato® (esketamine) is an FDA-approved nasal spray for treatment-resistant depression. It works on the NMDA receptor system, providing rapid relief when traditional antidepressants haven't been effective."
                }
              },
              {
                "@type": "Question",
                name: "How quickly will I see results from Spravato® or ketamine?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many patients notice improvement within hours to days after their first treatment—much faster than traditional antidepressants which can take 4-6 weeks."
                }
              },
              {
                "@type": "Question",
                name: "Is Spravato® or ketamine available in San Antonio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Tasel Health offers Spravato® and ketamine treatment in San Antonio, Texas at our location on Vance Jackson Rd. We also serve Oklahoma City, OK."
                }
              },
              {
                "@type": "Question",
                name: "Does insurance cover Spravato® treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Spravato® is often covered by insurance for treatment-resistant depression, though prior authorization is typically required. Coverage varies by plan."
                }
              }
            ]
          })
        }}
      />
      <SpravatoKetamineHeroSection />
      <SpravatoKetamineOverview />
      <SpravatoKetamineProcess />
      <SpravatoKetamineFAQ />
      <StillHaveQuestions />
    </main>
  )
}
