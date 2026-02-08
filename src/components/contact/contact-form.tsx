'use client'

import { useActionState } from 'react'
import { submitContactForm } from '@/app/contact/actions'
import { FormStatus } from './form-status'
import type { ContactFormState } from '@/types/contact'

const initialState: ContactFormState = {
  success: false,
  message: '',
}

const inquiryOptions = [
  { value: 'booking', label: 'DJ Booking' },
  { value: 'production', label: 'Production Services' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'other', label: 'Other' },
] as const

const inputStyles =
  'w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className="space-y-6">
      <FormStatus state={state} />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={inputStyles}
          aria-describedby={state.errors?.name ? 'name-error' : undefined}
        />
        {state.errors?.name && (
          <p id="name-error" className="mt-1 text-sm text-error">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputStyles}
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
        />
        {state.errors?.email && (
          <p id="email-error" className="mt-1 text-sm text-error">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="inquiryType" className="mb-1.5 block text-sm font-medium">
          What can I help with?
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          className={inputStyles}
          aria-describedby={state.errors?.inquiryType ? 'inquiry-error' : undefined}
        >
          <option value="">Select an option</option>
          {inquiryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {state.errors?.inquiryType && (
          <p id="inquiry-error" className="mt-1 text-sm text-error">
            {state.errors.inquiryType[0]}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="eventDate" className="mb-1.5 block text-sm font-medium">
            Event Date <span className="text-foreground-muted">(optional)</span>
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            className={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="venue" className="mb-1.5 block text-sm font-medium">
            Venue <span className="text-foreground-muted">(optional)</span>
          </label>
          <input
            id="venue"
            name="venue"
            type="text"
            placeholder="Venue name"
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your event or project..."
          className={`${inputStyles} resize-y`}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-1 text-sm text-error">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-background transition-colors hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
