'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/data/site'
import { Container } from '@/components/ui/container'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { NavLink } from './nav-link'
import { MobileNav } from './mobile-nav'

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[60] rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background focus-visible:not-sr-only focus-visible:fixed"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-xl font-bold text-foreground transition-colors hover:text-accent"
            >
              <Image
                src="/images/DJ-FoxWood-Fox-Character-head.png"
                alt=""
                width={36}
                height={36}
                className="img-pencil"
              />
              OGFoxWood
            </Link>

            <div className="flex items-center gap-2">
              <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} />
                ))}
              </nav>

              <ThemeToggle />

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-2 text-foreground-muted transition-colors hover:text-foreground md:hidden"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                aria-expanded={mobileNavOpen}
                aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileNavOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  )
}
