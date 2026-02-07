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
          ? 'bg-emerald-900/20 text-emerald-400'
          : 'bg-red-900/20 text-red-400'
      }`}
      role="alert"
    >
      {state.message}
    </div>
  )
}
