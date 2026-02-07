'use server'

import { contactSchema } from '@/lib/contact-schema'
import { resend } from '@/lib/resend'
import { BookingInquiryEmail } from '@/components/emails/booking-inquiry'
import type { ContactFormState } from '@/types/contact'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'bookings@ogfoxwood.com'

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    inquiryType: formData.get('inquiryType'),
    message: formData.get('message'),
    eventDate: formData.get('eventDate') || undefined,
    venue: formData.get('venue') || undefined,
  }

  const result = contactSchema.safeParse(raw)

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {}
    for (const issue of result.error.issues) {
      const field = issue.path[0]?.toString() ?? 'form'
      const existing = fieldErrors[field] ?? []
      fieldErrors[field] = [...existing, issue.message]
    }

    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: fieldErrors,
    }
  }

  try {
    await resend.emails.send({
      from: 'OGFoxWood Site <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      replyTo: result.data.email,
      subject: `New inquiry from ${result.data.name}`,
      react: BookingInquiryEmail({ data: result.data }),
    })

    return {
      success: true,
      message: "Message sent! I'll get back to you soon.",
    }
  } catch (error) {
    console.error('Failed to send email:', error)
    return {
      success: false,
      message: 'Something went wrong sending your message. Please try again or email directly.',
    }
  }
}
