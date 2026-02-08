import type { ContactFormState } from '@/types/contact'

interface FormStatusProps {
  readonly state: ContactFormState
}

export function FormStatus({ state }: FormStatusProps) {
  if (!state.message) return null

  return (
    <div
      className={`rounded-lg p-4 text-sm ${
        state.success
          ? 'bg-success-muted text-success'
          : 'bg-error-muted text-error'
      }`}
      role="alert"
    >
      {state.message}
    </div>
  )
}
