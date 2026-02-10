import { Metadata } from 'next'
import Script from 'next/script'
import { AboutHero } from '@/components/sections/about-hero'
import { WhyWeExist } from '@/components/sections/why-we-exist'
import { OurApproach } from '@/components/sections/our-approach'
import { OurTeamExpertise } from '@/components/sections/our-team-expertise'
import { CareersSection } from '@/components/sections/careers-section'
import { OurLocations } from '@/components/sections/our-locations'
import { PatientCommitment } from '@/components/sections/patient-commitment'
import { AboutFAQ } from '@/components/sections/about-faq'
import { AboutDualCTA } from '@/components/sections/about-dual-cta'

export const metadata: Metadata = {
  title: 'About Tasel Health - Mental Health Care in Oklahoma & Texas',
  description: 'Learn about Tasel Health\'s mission to transform mental health care through integrated TMS therapy, psychiatry, and counseling. Now hiring providers in Oklahoma City and San Antonio.',
  keywords: [
    'about tasel health',
    'mental health care Oklahoma',
    'mental health careers',
    'psychiatrist jobs Oklahoma City',
    'therapist hiring',
    'TMS therapy clinic',
    'mental health providers',
    'psychiatric nurse practitioner jobs',
    'counselor positions Oklahoma',
    'San Antonio mental health'
  ],
  openGraph: {
    title: 'About Tasel Health - Transforming Mental Health Care',
    description: 'Comprehensive mental health care combining TMS therapy, psychiatry, and counseling. Now hiring exceptional providers.',
    type: 'website',
    images: [
      {
        url: '/images/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'About Tasel Health',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* FAQPage schema for About page (dual audience FAQ) */}
      <Script id="faq-about-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you serve patients in Oklahoma City?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our Oklahoma City clinic offers TMS therapy, psychiatry, and counseling, with telehealth across Oklahoma."
                }
              },
              {
                "@type": "Question",
                name: "Are you hiring mental health providers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We are recruiting psychiatrists, PMHNPs, therapists, and clinical support in Oklahoma City, with San Antonio coming soon."
                }
              }
            ]
          })
        }}
      />
      {/* JobPosting schema for key roles (high-level example) */}
      <Script id="jobposting-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "Psychiatrist - Oklahoma City",
            hiringOrganization: {
              "@type": "Organization",
              name: "Tasel Health",
              sameAs: "https://taselhealth.com"
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9210 S Western, Suite A-21",
                addressLocality: "Oklahoma City",
                addressRegion: "OK",
                postalCode: "73139",
                addressCountry: "US"
              }
            },
            employmentType: ["FULL_TIME", "PART_TIME"],
            validThrough: "2030-12-31",
            description: "Board-certified/eligible Psychiatrist to provide outpatient psychiatric care with access to BrainsWay Deep TMS therapy.",
            applicantLocationRequirements: {
              "@type": "Country",
              name: "United States"
            }
          })
        }}
      />
      <AboutHero />
      <WhyWeExist />
      <OurApproach />
      <OurTeamExpertise />
      <CareersSection />
      <OurLocations />
      <PatientCommitment />
      <AboutFAQ />
      <AboutDualCTA />
    </main>
  )
}