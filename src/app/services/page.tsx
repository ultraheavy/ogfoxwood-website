import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { ServiceSection } from '@/components/services/service-section'
import { serviceSections } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'DJ sets, private events, brand activations, music production, and remix services by OGFoxWood.',
}

export default function ServicesPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="space-y-24">
          {serviceSections.map((section) => (
            <ServiceSection key={section.heading} section={section} />
          ))}

          <AnimateOnScroll>
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-background-secondary">
              <div className="prism-divider" />
              <div className="p-12 text-center sm:p-16">
                <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                  Let&apos;s work together
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-lg text-foreground-muted">
                  Have an event, project, or idea? Let&apos;s talk about how OGFoxWood can bring the vibe.
                </p>
                <div className="mt-8">
                  <Button href="/contact" size="lg">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </div>
  )
}
