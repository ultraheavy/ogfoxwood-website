'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { TargetAndTransition, Transition } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

interface AnimationProps {
  readonly initial?: TargetAndTransition
  readonly animate?: TargetAndTransition
  readonly transition?: Transition
}

function fadeUp(delay: number): AnimationProps {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }
}

const empty: AnimationProps = {}

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 500], [0, 150])

  const anim = (delay: number): AnimationProps =>
    prefersReducedMotion ? empty : fadeUp(delay)

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Cityscape background — pencil lines that adapt to theme, parallax shift */}
      <motion.div
        className="absolute inset-0"
        style={prefersReducedMotion ? undefined : { y: bgY }}
      >
        <Image
          src="/images/ogfoxwood-backgorund-hero-landscape.jpg"
          alt=""
          fill
          priority
          className="img-pencil object-cover object-center opacity-15"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent-muted)_0%,_transparent_70%)]" />

      <Container className="relative z-10 py-24 text-center">
        <motion.div {...anim(0)} className="mx-auto mb-6 w-48 sm:w-64">
          <Image
            src="/images/DJ-FoxWood-Fox-Character-tb.png"
            alt="OGFoxWood fox character"
            width={256}
            height={320}
            priority
            className="img-pencil mx-auto drop-shadow-[0_0_30px_var(--accent-muted)]"
          />
        </motion.div>

        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent"
          {...anim(0.1)}
        >
          DJ / Producer / Vibe Curator
        </motion.p>

        <motion.div {...anim(0.2)} className="mx-auto mb-2 w-72 sm:w-96">
          <Image
            src="/images/DJ-FoxWood-Type-logo-pencil-tb.png"
            alt="DJ OGFoxWood"
            width={480}
            height={100}
            priority
            className="img-pencil mx-auto"
          />
        </motion.div>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-foreground-muted sm:text-xl"
          {...anim(0.4)}
        >
          Building dance floors from the ground up. Deep house, funk, and soul —
          every set is a conversation between rhythm and feeling.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          {...anim(0.6)}
        >
          <Button href="/contact" size="lg">
            Book OGFoxWood
          </Button>
          <Button href="/music" variant="secondary" size="lg">
            Listen Now
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
