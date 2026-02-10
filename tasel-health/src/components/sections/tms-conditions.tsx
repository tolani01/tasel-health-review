'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
// VideoAnimation removed - using static content
import { Brain, Heart, Shield, Users, CheckCircle, Info } from 'lucide-react'

export function TMSConditions() {
  const primaryConditions = [
    {
      name: "Major Depressive Disorder",
      icon: Brain,
      description: "FDA-cleared for treatment-resistant depression with proven efficacy in clinical trials.",
      successRate: "75%",
      sessions: "20-30",
      animation: "/animations/Video_2_Understanding_Depression_Animation.html",
      fdaYear: "2013",
      benefits: [
        "Significant mood improvement",
        "Reduced suicidal ideation",
        "Better sleep quality",
        "Increased energy levels"
      ]
    },
    {
      name: "Obsessive-Compulsive Disorder",
      icon: Shield,
      description: "Effective treatment for OCD symptoms when traditional therapies haven't provided sufficient relief.",
      successRate: "65%",
      sessions: "25-35",
      animation: "/animations/Video_5_TMS_Success_Stories_Animation.html",
      fdaYear: "2018",
      benefits: [
        "Reduced obsessive thoughts",
        "Decreased compulsive behaviors",
        "Improved daily functioning",
        "Better quality of life"
      ]
    },
    {
      name: "Anxious Depression",
      icon: Heart,
      description: "Specialized treatment for depression with significant anxiety symptoms.",
      successRate: "70%",
      sessions: "20-30",
      animation: "/animations/Video_6_Anxiety_And_Your_Brain_Animation.html",
      fdaYear: "2019",
      benefits: [
        "Reduced anxiety symptoms",
        "Improved mood stability",
        "Better stress management",
        "Enhanced social functioning"
      ]
    }
  ]

  const additionalConditions = [
    { name: "Smoking Cessation", status: "FDA Cleared", year: "2020" },
    { name: "Bipolar Depression", status: "FDA Cleared", year: "2021" },
    { name: "Post-Traumatic Stress Disorder", status: "FDA Cleared", year: "2022" },
    { name: "Alzheimer's Disease", status: "FDA Cleared", year: "2023" },
    { name: "Chronic Pain", status: "FDA Cleared", year: "2023" },
    { name: "Alcohol Use Disorder", status: "Off-Label", year: "Research" },
    { name: "Autism Spectrum Disorder", status: "Research", year: "Ongoing" },
    { name: "Attention Deficit Disorder", status: "Research", year: "Ongoing" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4 mr-2" />
            FDA-Cleared Treatments
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conditions We Treat with Deep TMS™
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            BrainsWay Deep TMS™ has received multiple FDA clearances for treating various 
            neurological and psychiatric conditions, offering hope where traditional treatments have fallen short.
          </p>
        </div>

        {/* Primary Conditions */}
        <div className="space-y-12 mb-20">
          {primaryConditions.map((condition, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <condition.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{condition.name}</h3>
                      <Badge className="bg-green-100 text-green-700 mt-1">
                        FDA Cleared {condition.fdaYear}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {condition.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-teal-50 rounded-lg">
                      <div className="text-3xl font-bold text-teal-600">{condition.successRate}</div>
                      <div className="text-sm text-teal-700">Success Rate</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">{condition.sessions}</div>
                      <div className="text-sm text-purple-700">Sessions</div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Treatment Benefits:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {condition.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Treatment Banner - Symptom Relief Visualization */}
                <div className="relative overflow-hidden">
                  {/* Condition-Specific Abstract Visualization */}
                  {index === 0 && ( // Major Depressive Disorder - Darkness to Light
                    <div className="relative h-full bg-gradient-to-b from-slate-900 via-indigo-800 to-amber-400 p-8 lg:p-12 flex flex-col justify-center">
                      {/* Simplified Visual: Light Breaking Through */}
                      <div className="absolute inset-0 overflow-hidden">
                        {/* Single powerful light beam from bottom */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-full bg-gradient-to-t from-yellow-300/40 via-amber-400/20 to-transparent blur-3xl"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center text-white">
                        {/* Large Visual Metaphor */}
                        <div className="mb-8">
                          <div className="text-7xl font-bold mb-4">☀️</div>
                          <h3 className="text-3xl font-bold mb-3">Lifting the Weight</h3>
                          <p className="text-lg opacity-90">Restoring hope, energy, and joy</p>
                        </div>
                        
                        {/* Key Outcome - Single Focus */}
                        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-sm mx-auto">
                          <div className="flex items-center justify-center text-lg">
                            <span className="text-3xl mr-4">😔</span>
                            <span className="text-2xl font-bold mx-4">→</span>
                            <span className="text-3xl ml-4">😊</span>
                          </div>
                          <p className="mt-4 text-base font-medium">From persistent sadness to emotional wellness</p>
                        </div>
                        
                        <div className="text-sm opacity-80 italic">
                          Targets mood regulation centers in the brain
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && ( // Obsessive-Compulsive Disorder - Breaking Cycles
                    <div className="relative h-full bg-gradient-to-b from-rose-700 via-purple-700 to-emerald-500 p-8 lg:p-12 flex flex-col justify-center">
                      {/* Simplified Visual: Breaking Chain */}
                      <div className="absolute inset-0 overflow-hidden">
                        {/* One large circle breaking */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-8 border-white/15 rounded-full"></div>
                        {/* Break line */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-emerald-300/60 to-transparent rotate-45"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-emerald-300/60 to-transparent -rotate-45"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center text-white">
                        {/* Large Visual Metaphor */}
                        <div className="mb-8">
                          <div className="text-7xl font-bold mb-4">🔓</div>
                          <h3 className="text-3xl font-bold mb-3">Breaking the Loop</h3>
                          <p className="text-lg opacity-90">Freedom from intrusive thoughts</p>
                        </div>
                        
                        {/* Key Outcome - Single Focus */}
                        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-sm mx-auto">
                          <div className="flex items-center justify-center text-lg">
                            <span className="text-3xl mr-4">🔄</span>
                            <span className="text-2xl font-bold mx-4">→</span>
                            <span className="text-3xl ml-4">✨</span>
                          </div>
                          <p className="mt-4 text-base font-medium">From repetitive patterns to mental clarity</p>
                        </div>
                        
                        <div className="text-sm opacity-80 italic">
                          Targets compulsion & anxiety circuits
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && ( // Anxious Depression - Storm to Calm
                    <div className="relative h-full bg-gradient-to-b from-slate-700 via-indigo-600 to-rose-300 p-8 lg:p-12 flex flex-col justify-center">
                      {/* Simplified Visual: Waves Calming */}
                      <div className="absolute inset-0 overflow-hidden">
                        {/* Simple wave pattern - calm at bottom */}
                        <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 400 600" preserveAspectRatio="none">
                          {/* Calm waves at bottom */}
                          <path d="M0,450 Q100,420 200,450 T400,450 L400,600 L0,600 Z" fill="white" opacity="0.3"/>
                          <path d="M0,480 Q100,460 200,480 T400,480 L400,600 L0,600 Z" fill="white" opacity="0.2"/>
                        </svg>
                        {/* Soft glow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-rose-300/40 rounded-full blur-3xl"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center text-white">
                        {/* Large Visual Metaphor */}
                        <div className="mb-8">
                          <div className="text-7xl font-bold mb-4">🌸</div>
                          <h3 className="text-3xl font-bold mb-3">Calming the Storm</h3>
                          <p className="text-lg opacity-90">Finding peace and stability</p>
                        </div>
                        
                        {/* Key Outcome - Single Focus */}
                        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-sm mx-auto">
                          <div className="flex items-center justify-center text-lg">
                            <span className="text-3xl mr-4">😰</span>
                            <span className="text-2xl font-bold mx-4">→</span>
                            <span className="text-3xl ml-4">😌</span>
                          </div>
                          <p className="mt-4 text-base font-medium">From constant worry to inner calm</p>
                        </div>
                        
                        <div className="text-sm opacity-80 italic">
                          Targets anxiety & emotional regulation
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Conditions */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Treatment Areas
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our primary specializations, Deep TMS™ has shown effectiveness 
              in treating various other conditions, with ongoing research expanding treatment possibilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {additionalConditions.map((condition, index) => (
              <div 
                key={index} 
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 text-sm">{condition.name}</h4>
                  <Badge 
                    variant="secondary"
                    className={
                      condition.status === 'FDA Cleared' 
                        ? 'bg-green-100 text-green-700' 
                        : condition.status === 'Off-Label'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }
                  >
                    {condition.status}
                  </Badge>
                </div>
                <div className="text-xs text-gray-500">
                  {condition.status === 'FDA Cleared' ? `Cleared ${condition.year}` : condition.year}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start">
            <Info className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Treatment Disclaimer:</p>
              <p>
                FDA-cleared conditions have been approved for treatment with BrainsWay Deep TMS™. 
                Off-label treatments may be considered based on clinical judgment and emerging research. 
                Research conditions are currently being studied in clinical trials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
