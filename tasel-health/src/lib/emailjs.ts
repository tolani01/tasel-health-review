import emailjs from '@emailjs/browser'

// EmailJS configuration
// These are public keys that can be safely exposed in client-side code
const EMAILJS_SERVICE_ID = 'service_oodjbsu'
const EMAILJS_TEMPLATE_ID = 'template_afqsz2o'
const EMAILJS_PUBLIC_KEY = 'UUTAqg3kAgjQhV4Sd'

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

// Send consultation form email
export const sendConsultationEmail = async (formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
  source: string // Which button/form triggered this
}) => {
  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      source: formData.source,
      to_email: 'thaddeus.tolani@taselhealth.com', // Your business email
      reply_to: formData.email
    }

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    return { success: true, result }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}

// Send simple message form email
export const sendMessageEmail = async (formData: {
  name: string
  email: string
  phone: string
  message: string
  source: string // Which form triggered this
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      source: formData.source,
      to_email: 'thaddeus.tolani@taselhealth.com', // Your business email
      reply_to: formData.email
    }

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_4ykts98', // New template for simple message
      templateParams
    )

    return { success: true, result }
  } catch (error) {
    console.error('Message form error:', error)
    return { success: false, error }
  }
}

// Send notification to admin
export const sendAdminNotification = async (formData: {
  firstName: string
  lastName: string
  email: string
  service: string
  source: string
}) => {
  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      service: formData.service,
      source: formData.source,
      to_email: 'thaddeus.tolani@taselhealth.com', // Admin email
      message: `New consultation request from ${formData.firstName} ${formData.lastName} for ${formData.service} via ${formData.source}`
    }

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_admin_notification',
      templateParams
    )

    return { success: true, result }
  } catch (error) {
    console.error('Admin notification error:', error)
    return { success: false, error }
  }
}
