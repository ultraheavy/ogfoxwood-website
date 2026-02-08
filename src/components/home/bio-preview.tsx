'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { bio } from '@/data/site'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'

export function BioPreview() {
  const prefersReducedMotion = useReducedMotion()

  const slideLeft = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: '-50px' as const },
        transition: { duration: 0.6, ease: 'easeOut' as const },
      }

  const slideRight = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: '-50px' as const },
        transition: { duration: 0.6, delay: 0.15, ease: 'easeOut' as const },
      }

  return (
    <section className="pt-16 pb-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Image — wider presence on desktop */}
          <motion.div
            {...slideLeft}
            className="lg:col-span-7 lg:row-start-1"
          >
            <Image
              src="/images/og-foxwood-portrait.png"
              alt="OGFoxWood portrait"
              width={600}
              height={700}
              className="mx-auto max-w-md rounded-xl object-cover lg:max-w-none"
              sizes="(max-width: 1024px) 400px, 580px"
            />
          </motion.div>

          {/* Text card — overlaps image on desktop */}
          <motion.div
            {...slideRight}
            className="lg:col-span-7 lg:col-start-6 lg:row-start-1"
          >
            <div className="rounded-xl bg-background/90 backdrop-blur-sm lg:p-12 p-8">
              <SectionHeading
                title="The Vibe"
                subtitle="Who is OGFoxWood?"
                align="left"
              />
              <p className="text-lg leading-relaxed text-foreground-muted">
                {bio.short}
              </p>
              <div className="mt-8">
                <Button href="/services" variant="secondary">
                  What I Do
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
