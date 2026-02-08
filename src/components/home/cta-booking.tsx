'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function CtaBooking() {
  const prefersReducedMotion = useReducedMotion()

  const tiltReveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30, rotateX: 4 },
        whileInView: { opacity: 1, y: 0, rotateX: 0 },
        viewport: { once: true, margin: '-50px' as const },
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
      }

  return (
    <section className="pt-32 pb-24">
      <Container>
        <div style={{ perspective: 800 }}>
          <motion.div {...tiltReveal} className="lg:-mx-8">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-background-secondary">
              <div className="prism-divider-animated" />
              <div className="p-12 text-center sm:p-16">
                <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                  Ready to set the vibe?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-lg text-foreground-muted">
                  Whether it&apos;s a club night, private event, or brand activation
                  — let&apos;s build something that moves people.
                </p>
                <div className="mt-8">
                  <Button href="/contact" size="lg">
                    Book OGFoxWood
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
