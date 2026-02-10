'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Calendar, AlertCircle } from 'lucide-react'

export function LocationHours() {
  const regularHours = [
  { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const specialHours = [
    {
      date: 'New Year\'s Day',
      hours: 'Closed',
      note: 'January 1st'
    },
    {
      date: 'Memorial Day',
      hours: 'Closed',
      note: 'Last Monday in May'
    },
    {
      date: 'Independence Day',
      hours: 'Closed',
      note: 'July 4th'
    },
    {
      date: 'Labor Day',
      hours: 'Closed',
      note: 'First Monday in September'
    },
    {
      date: 'Thanksgiving',
      hours: 'Closed',
      note: 'Fourth Thursday in November'
    },
    {
      date: 'Christmas Day',
      hours: 'Closed',
      note: 'December 25th'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hours of Operation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open Monday to Friday, 9:00 AM – 5:00 PM. Closed Saturday and Sunday. 
            After-hours appointments available by request only.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Regular Hours */}
          <div>
            <Card className="tasel-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Clock className="h-6 w-6 text-lavender-600 mr-3" />
                  Regular Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {regularHours.map((schedule, index) => (
                    <div 
                      key={schedule.day}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        schedule.day === 'Sunday' 
                          ? 'bg-red-50 text-red-700' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{schedule.day}</span>
                      <span className={`font-semibold ${
                        schedule.day === 'Sunday' ? 'text-red-600' : 'text-gray-900'
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Special Hours & Notes */}
          <div className="space-y-8">
            <Card className="tasel-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="h-6 w-6 text-lavender-600 mr-3" />
                  Holiday Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {specialHours.map((holiday, index) => (
                    <div key={holiday.date} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-900">{holiday.date}</span>
                        <div className="text-sm text-gray-600">{holiday.note}</div>
                      </div>
                      <span className="font-semibold text-orange-600">{holiday.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
