import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contact-hero'
import { LocationDetails } from '@/components/sections/location-details'
import { LocationMap } from '@/components/sections/location-map'
import { LocationHours } from '@/components/sections/location-hours'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'

export const metadata: Metadata = {
  title: 'Contact Us - Schedule Your Consultation | Tasel Health',
  description: 'Contact Tasel Health for TMS therapy consultations, psychiatric services, and mental health support. Schedule your appointment today.',
  keywords: 'contact Tasel Health, TMS consultation, mental health appointment, psychiatric services Oklahoma City, San Antonio',
  openGraph: {
    title: 'Contact Us - Schedule Your Consultation',
    description: 'Get in touch with our mental health experts for personalized care.',
    type: 'website',
    images: [
      {
        url: '/images/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Tasel Health',
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <LocationDetails />
      <LocationMap />
      <LocationHours />
      <StillHaveQuestions />
    </main>
  )
}
