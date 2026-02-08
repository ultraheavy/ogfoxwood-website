'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'

const SOUNDCLOUD_PROFILE = 'https://soundcloud.com/ogfoxwood'
const SOUNDCLOUD_EMBED_URL = `https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_PROFILE)}&color=%23e0a040&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`

export function SoundCloudEmbed() {
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
      <hr className="prism-divider" />

      <Container className="pt-16 pb-4">
        <motion.div {...headingAnim}>
          <SectionHeading
            title="In the Mix"
            subtitle="Hear what a set feels like"
          />
        </motion.div>

        <motion.div {...scaleReveal} className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg">
            <iframe
              title="OGFoxWood on SoundCloud"
              width="100%"
              height={450}
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={SOUNDCLOUD_EMBED_URL}
              className="block"
            />
          </div>
          <p className="mt-3 text-center text-sm text-foreground-muted">
            <a
              href={SOUNDCLOUD_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              Follow OGFoxWood on SoundCloud
            </a>
          </p>
        </motion.div>
      </Container>

      <hr className="prism-divider mt-16" />
    </section>
  )
}
