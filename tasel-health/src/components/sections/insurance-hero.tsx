'use client'

import { Shield, CheckCircle, DollarSign } from 'lucide-react'

export function InsuranceHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-teal-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-bold shadow-xl">
              <Shield className="h-6 w-6 mr-3 text-teal-300" />
              Insurance & Payment Options
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Quality Mental Health Care
              <span className="block text-teal-300">Should Be Accessible</span>
            </h1>

            <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              We accept most commercial and government insurance plans, plus offer affordable self-pay rates 
              to ensure everyone can access the care they need
            </p>

            {/* Three Feature Boxes */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
              {/* Insurance Box */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">INSURANCE</h3>
                <p className="text-purple-100 font-medium mb-1">We Accept</p>
                <p className="text-purple-200 text-sm">Most Plans</p>
              </div>

              {/* Self-Pay Box */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full mb-4">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">SELF-PAY</h3>
                <p className="text-purple-100 font-medium mb-1">Affordable</p>
                <p className="text-purple-200 text-sm">Rates</p>
              </div>

              {/* Verified Box */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-4">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">VERIFIED</h3>
                <p className="text-purple-100 font-medium mb-1">We'll Check</p>
                <p className="text-purple-200 text-sm">Your Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
