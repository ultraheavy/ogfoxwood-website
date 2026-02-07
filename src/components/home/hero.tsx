'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
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

  const anim = (delay: number): AnimationProps =>
    prefersReducedMotion ? empty : fadeUp(delay)

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent-muted)_0%,_transparent_70%)]" />

      <Container className="relative z-10 py-24 text-center">
        <motion.div {...anim(0)} className="mx-auto mb-6 w-32 sm:w-40">
          <Image
            src="/images/DJ-FoxWood-Fox-Character.png"
            alt="OGFoxWood fox character"
            width={160}
            height={220}
            priority
            className="mx-auto invert brightness-90 drop-shadow-[0_0_30px_rgba(212,168,67,0.2)]"
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
            src="/images/DJ-FoxWood-Type-logo-pencil.png"
            alt="DJ OGFoxWood"
            width={480}
            height={100}
            priority
            className="mx-auto invert brightness-90"
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
