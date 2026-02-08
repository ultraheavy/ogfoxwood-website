'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { navItems, siteConfig } from '@/data/site'
import { NavLink } from './nav-link'
import { ThemeToggle } from '@/components/theme/theme-toggle'

interface MobileNavProps {
  readonly isOpen: boolean
  readonly onClose: () => void
}

const socialLinks = [
  { label: 'Instagram', href: siteConfig.instagram },
  { label: 'SoundCloud', href: siteConfig.soundcloud },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
] as const

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const prefersReducedMotion = useReducedMotion()

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

  const overlay = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, scale: 0.98 },
        transition: { duration: 0.25 },
      }

  const foxHead = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.05 },
      }

  const divider = prefersReducedMotion
    ? {}
    : {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
        transition: { duration: 0.5, delay: 0.08, ease: 'easeOut' as const },
      }

  const navItem = (i: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
          transition: {
            duration: 0.35,
            delay: 0.1 + i * 0.06,
            ease: 'easeOut' as const,
          },
        }

  const socialDelay = 0.1 + navItems.length * 0.06 + 0.08

  const socialGroup = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: socialDelay },
      }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-lg md:hidden"
          {...overlay}
          key="mobile-nav-overlay"
        >
          {/* Top bar: close + theme toggle */}
          <div className="flex items-center justify-between px-6 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              Close
            </button>
            <ThemeToggle />
          </div>

          {/* Content area — centered vertically */}
          <nav
            className="flex flex-1 flex-col items-center justify-center gap-8 px-6"
            aria-label="Mobile navigation"
          >
            {/* Fox head branding */}
            <motion.div {...foxHead} className="mb-2">
              <Image
                src="/images/DJ-FoxWood-Fox-Character-head.png"
                alt=""
                width={64}
                height={64}
                className="img-pencil drop-shadow-[0_0_20px_var(--accent-muted)]"
              />
            </motion.div>

            {/* Top prism divider */}
            <motion.hr
              {...divider}
              className="prism-divider w-48 origin-center"
            />

            {/* Nav links — staggered slide-in */}
            <div className="flex flex-col items-center gap-5">
              {navItems.map((item, i) => (
                <motion.div key={item.href} {...navItem(i)}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    onClick={onClose}
                    className="text-2xl font-heading"
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom prism divider */}
            <motion.hr
              {...divider}
              className="prism-divider w-48 origin-center"
            />

            {/* Social links */}
            <motion.div
              {...socialGroup}
              className="flex items-center gap-3 text-sm text-foreground-muted"
            >
              {socialLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="text-border" aria-hidden="true">
                      ·
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                    onClick={onClose}
                    {...(link.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
