import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'

export function CtaBooking() {
  return (
    <section className="py-24">
      <Container>
        <AnimateOnScroll>
          <div className="rounded-2xl bg-gradient-to-br from-surface to-background-secondary p-12 text-center sm:p-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
