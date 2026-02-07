import { type ReactNode } from 'react'

interface ContainerProps {
  readonly children: ReactNode
  readonly className?: string
  readonly as?: 'div' | 'section' | 'main'
}

export function Container({
  children,
  className = '',
  as: Element = 'div',
}: ContainerProps) {
  return (
    <Element className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Element>
  )
}
