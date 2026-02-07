import { Resend } from 'resend'

function createResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not configured')
  }

  return new Resend(apiKey)
}

export const resend = createResendClient()
