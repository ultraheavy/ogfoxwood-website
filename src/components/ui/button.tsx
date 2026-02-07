import Link from 'next/link'
import { type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  readonly children: ReactNode
  readonly variant?: ButtonVariant
  readonly size?: ButtonSize
  readonly className?: string
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  readonly href?: never
  readonly type?: 'button' | 'submit'
  readonly disabled?: boolean
  readonly onClick?: () => void
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  readonly href: string
  readonly type?: never
  readonly disabled?: never
  readonly onClick?: never
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-background hover:bg-accent-hover font-semibold',
  secondary:
    'border border-accent text-accent hover:bg-accent-muted font-semibold',
  ghost:
    'text-foreground-muted hover:text-foreground hover:bg-surface',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background'

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={styles}>
        {children}
      </Link>
    )
  }

  const { type = 'button', disabled, onClick } = props as ButtonAsButtonProps
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {children}
    </button>
  )
}
