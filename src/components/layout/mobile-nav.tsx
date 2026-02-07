'use client'

import { useEffect } from 'react'
import { navItems } from '@/data/site'
import { NavLink } from './nav-link'

interface MobileNavProps {
  readonly isOpen: boolean
  readonly onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className="fixed right-0 top-0 flex h-full w-64 flex-col bg-background-secondary p-6 pt-20 shadow-xl"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={onClose}
              className="text-lg"
            />
          ))}
        </div>
      </nav>
    </div>
  )
}
