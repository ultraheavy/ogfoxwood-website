'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'

export function VideoEmbed() {
  const prefersReducedMotion = useReducedMotion()

  const scaleReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.92 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: '-50px' as const },
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
      }

  const headingAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' as const },
        transition: { duration: 0.5, ease: 'easeOut' as const },
      }

  return (
    <section className="bg-background-elevated py-20">
      {/* Full-bleed prism divider — top */}
      <hr className="prism-divider" />

      <Container className="pt-16 pb-4">
        <motion.div {...headingAnim}>
          <SectionHeading
            title="In the Mix"
            subtitle="See what a set feels like"
          />
        </motion.div>

        <motion.div {...scaleReveal} className="mx-auto max-w-4xl">
          <div
            className="flex items-center justify-center overflow-hidden rounded-lg bg-surface"
            style={{ aspectRatio: '16/9' }}
            role="img"
            aria-label="Video placeholder — embed coming soon"
          >
            <div className="text-center text-foreground-muted">
              <svg
                className="mx-auto mb-3 h-16 w-16 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <p className="text-sm">Video embed coming soon</p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Full-bleed prism divider — bottom */}
      <hr className="prism-divider mt-16" />
    </section>
  )
}
