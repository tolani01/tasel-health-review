'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ConsultationContextType {
  isFormVisible: boolean
  showForm: (service?: string, source?: string) => void
  hideForm: () => void
  selectedService: string
  formSource: string
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined)

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [formSource, setFormSource] = useState('')

  const showForm = (service = '', source = 'general') => {
    setSelectedService(service)
    setFormSource(source)
    setIsFormVisible(true)
    
    // Scroll to top when form opens
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const hideForm = () => {
    setIsFormVisible(false)
    setSelectedService('')
    setFormSource('')
  }

  return (
    <ConsultationContext.Provider
      value={{
        isFormVisible,
        showForm,
        hideForm,
        selectedService,
        formSource
      }}
    >
      {children}
    </ConsultationContext.Provider>
  )
}

export function useConsultation() {
  const context = useContext(ConsultationContext)
  if (context === undefined) {
    throw new Error('useConsultation must be used within a ConsultationProvider')
  }
  return context
}
