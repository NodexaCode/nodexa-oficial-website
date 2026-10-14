'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'service' | 'message', string>>
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (field(formData, 'website', 200)) {
    return { status: 'success', message: 'Thanks! We’ll be in touch shortly.' }
  }

  const name = field(formData, 'name', 120)
  const email = field(formData, 'email', 200)
  const service = field(formData, 'service', 80)
  const message = field(formData, 'message', 4000)

  const errors: ContactState['errors'] = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'
  if (!service) errors.service = 'Please choose a service.'
  if (message.length < 10) errors.message = 'Tell us a little more (at least 10 characters).'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  // TODO: forward the inquiry to an email provider or CRM.

  return {
    status: 'success',
    message: `Thanks, ${name.split(' ')[0]}! Your message was received. We’ll reply within 1 business day.`,
  }
}
