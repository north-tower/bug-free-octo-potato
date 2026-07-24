'use server'

import {serverClient} from '@/sanity/lib/serverClient'

export type ContactFormResult =
  | {success: true}
  | {success: false; error: string}

export async function submitContactForm(input: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  services?: string[]
  message?: string
}): Promise<ContactFormResult> {
  try {
    const firstName = input.firstName?.trim()
    const lastName = input.lastName?.trim()
    const email = input.email?.trim()
    const phone = input.phone?.trim() || ''
    const message = input.message?.trim() || ''
    const services = (input.services || []).map((item) => item.trim()).filter(Boolean)

    if (!firstName || !lastName || !email) {
      return {success: false, error: 'Please fill in all required fields.'}
    }

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.error('Missing SANITY_API_WRITE_TOKEN')
      return {success: false, error: 'Form is not configured yet. Please try again later.'}
    }

    await serverClient.create({
      _type: 'contactSubmission',
      firstName,
      lastName,
      email,
      phone,
      services,
      message,
      submittedAt: new Date().toISOString(),
      status: 'new',
    })

    return {success: true}
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      error: 'Failed to submit the form. Please try again later.',
    }
  }
}
