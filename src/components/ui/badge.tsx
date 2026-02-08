import { type ReactNode } from 'react'

type BadgeVariant = 'default' | 'accent' | 'success' | 'muted'

interface BadgeProps {
  readonly children: ReactNode
  readonly variant?: BadgeVariant
  readonly className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface text-foreground',
  accent: 'bg-accent-muted text-accent',
  success: 'bg-success-muted text-success',
  muted: 'bg-surface text-foreground-muted',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
