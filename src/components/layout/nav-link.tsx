'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  readonly href: string
  readonly label: string
  readonly onClick?: () => void
  readonly className?: string
}

export function NavLink({ href, label, onClick, className = '' }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-accent'
          : 'text-foreground-muted hover:text-foreground'
      } ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  )
}
