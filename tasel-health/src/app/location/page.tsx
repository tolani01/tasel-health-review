import { Metadata } from 'next'
import { LocationHero } from '@/components/sections/location-hero'
import { LocationDetails } from '@/components/sections/location-details'
import { LocationMap } from '@/components/sections/location-map'
import { LocationHours } from '@/components/sections/location-hours'
import { LocationContact } from '@/components/sections/location-contact'

export const metadata: Metadata = {
  title: 'Visit Us - Location & Hours - Tasel Health',
  description: 'Visit Tasel Health at our Oklahoma City location. Find directions, hours, parking information, and contact details.',
  keywords: 'Tasel Health location, Oklahoma City mental health, directions, hours, parking, visit us',
  openGraph: {
    title: 'Visit Us - Location & Hours - Tasel Health',
    description: 'Visit our Oklahoma City location for comprehensive mental health care.',
    type: 'website',
    images: [
      {
        url: '/images/location-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Tasel Health Location',
      },
    ],
  },
}

export default function LocationPage() {
  return (
    <main className="min-h-screen">
      <LocationHero />
      <LocationDetails />
      <LocationMap />
      <LocationHours />
      <LocationContact />
    </main>
  )
}
