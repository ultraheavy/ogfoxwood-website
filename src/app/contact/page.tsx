import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { ContactForm } from '@/components/contact/contact-form'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book OGFoxWood for DJ sets, production work, or collaborations. Get in touch.',
}

export default function ContactPage() {
  return (
    <div className="py-24">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Bookings, collabs, or just to say what's up"
        />

        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AnimateOnScroll>
              <ContactForm />
            </AnimateOnScroll>
          </div>

          <aside className="lg:col-span-1">
            <AnimateOnScroll delay={0.15}>
              <div className="rounded-lg border border-border/50 bg-surface p-6">
                <h3 className="mb-4 text-lg font-semibold">Quick Info</h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-foreground-muted">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-accent transition-colors hover:text-accent-hover"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div>
                    <p className="font-medium text-foreground-muted">Instagram</p>
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-colors hover:text-accent-hover"
                    >
                      @ogfoxwood
                    </a>
                  </div>

                  <div>
                    <p className="font-medium text-foreground-muted">Response Time</p>
                    <p>Usually within 24-48 hours</p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground-muted">Based in</p>
                    <p>Available for local and travel bookings</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </aside>
        </div>
      </Container>
    </div>
  )
}
