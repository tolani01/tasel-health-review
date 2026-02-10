import { Metadata } from 'next'
import Script from 'next/script'
import { CounselingHeroSection } from '@/components/sections/counseling-hero-section'
import { CounselingServices } from '@/components/sections/counseling-services'
import { TherapyProcess } from '@/components/sections/therapy-process'
import { TherapyPrivacy } from '@/components/sections/therapy-privacy'
import { TherapyBenefits } from '@/components/sections/therapy-benefits'
import { CounselingFAQ } from '@/components/sections/counseling-faq'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'Therapist in Oklahoma City | Counseling Services | Tasel Health',
  description: 'Professional counseling in Oklahoma City including CBT, DBT, trauma therapy, couples/family therapy. Telehealth in OK & TX.',
  keywords: [
    'therapist Oklahoma City',
    'counseling services OKC',
    'trauma therapy Oklahoma',
    'couples therapy OKC',
    'therapy San Antonio'
  ],
  openGraph: {
    title: 'Therapist in Oklahoma City | Counseling Services | Tasel Health',
    description: 'Evidence-based counseling and therapy in OKC. Telehealth available in Oklahoma and Texas.',
    type: 'website',
    images: [
      {
        url: '/images/counseling-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Counseling Services at Tasel Health',
      },
    ],
  },
}

export default function CounselingPage() {
  return (
    <main className="min-h-screen">
      {/* FAQPage schema for Counseling page */}
      <Script id="faq-counseling-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you offer teletherapy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide secure telehealth counseling across Oklahoma and Texas."
                }
              },
              {
                "@type": "Question",
                name: "What specialties are available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer trauma therapy, perinatal mental health, couples and family therapy, teen therapy, and more."
                }
              }
            ]
          })
        }}
      />
      <CounselingHeroSection />
      <CounselingServices />
      <TherapyProcess />
      <TherapyPrivacy />
      <TherapyBenefits />
      <CounselingFAQ />
      <StillHaveQuestions />
    </main>
  )
}
