import { Metadata } from 'next'
import Script from 'next/script'
import { PsychiatryHeroSection } from '@/components/sections/psychiatry-hero-section'
import { CrisisResources } from '@/components/sections/crisis-resources'
import { PsychiatryServices } from '@/components/sections/psychiatry-services'
import { SafetyMonitoring } from '@/components/sections/safety-monitoring'
import { ControlledSubstancePolicy } from '@/components/sections/controlled-substance-policy'
import { PsychiatryFAQ } from '@/components/sections/psychiatry-faq'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'Psychiatrist in Oklahoma City | Medication Management | Tasel Health',
  description: 'Comprehensive psychiatric care and medication management in Oklahoma City with same-week consultations. Serving OK & TX; San Antonio coming soon.',
  keywords: [
    'psychiatrist Oklahoma City',
    'medication management OKC',
    'psychiatric services Oklahoma',
    'psychiatrist San Antonio',
    'mental health clinic OKC'
  ],
  openGraph: {
    title: 'Psychiatrist in Oklahoma City | Medication Management | Tasel Health',
    description: 'Comprehensive psychiatric care with expert medication management. Same-week consults in OKC; San Antonio coming soon.',
    type: 'website',
    images: [
      {
        url: '/images/psychiatry-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Psychiatric Services at Tasel Health',
      },
    ],
  },
}

export default function PsychiatryPage() {
  return (
    <main className="min-h-screen">
      {/* FAQPage schema for Psychiatry page */}
      <Script id="faq-psychiatry-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you offer telepsychiatry?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide secure telehealth visits across Oklahoma and Texas for psychiatric care."
                }
              },
              {
                "@type": "Question",
                name: "Can new patients be seen quickly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We typically offer same-week consultations for new patients."
                }
              }
            ]
          })
        }}
      />
      <PsychiatryHeroSection />
      <CrisisResources />
      <PsychiatryServices />
      <SafetyMonitoring />
      <ControlledSubstancePolicy />
      <PsychiatryFAQ />
      <StillHaveQuestions />
    </main>
  )
}
