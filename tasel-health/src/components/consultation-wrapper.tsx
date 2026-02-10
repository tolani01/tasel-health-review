'use client'

import { useConsultation } from '@/contexts/consultation-context'
import { ConsultationForm } from '@/components/sections/consultation-form'

export function ConsultationWrapper() {
  const { isFormVisible, hideForm, selectedService, formSource } = useConsultation()

  return (
    <ConsultationForm
      isVisible={isFormVisible}
      onClose={hideForm}
      preSelectedService={selectedService}
      source={formSource}
    />
  )
}
