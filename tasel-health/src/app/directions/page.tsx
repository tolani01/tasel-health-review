import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Directions & Parking | Tasel Health Oklahoma City',
  description: 'Directions, parking info, public transit, and nearby landmarks for Tasel Health at 9210 S Western, Suite A-21, Oklahoma City, OK 73139.',
}

export default function DirectionsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Directions & Parking</h1>
          <p className="text-gray-700 mb-4">Address: 9210 S Western, Suite A-21, Oklahoma City, OK 73139</p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Driving & Parking</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Free parking is available in the clinic lot.</li>
                  <li>Accessible parking spaces near the main entrance.</li>
                  <li>Enter from S Western Ave; Suite A-21 is signed at the front.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Public Transit</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Check EMBARK bus routes for the nearest stop.</li>
                  <li>Rideshare pickup/drop-off available at main entrance.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Nearby Landmarks</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Minutes from I-35 and I-240 corridors</li>
                  <li>Near retail and dining on Western Ave</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border">
              <iframe
                title="Google Map - Tasel Health"
                aria-label="Google Map showing the location of Tasel Health in Oklahoma City"
                className="w-full h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=9210+S+Western+Suite+A-21+Oklahoma+City+OK+73139&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


