import { bio } from '@/data/site'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { PlaceholderImage } from '@/components/ui/placeholder-image'
import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'

export function BioPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateOnScroll>
            <PlaceholderImage
              width={600}
              height={700}
              label="OGFoxWood portrait"
              className="mx-auto max-w-md lg:max-w-none"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
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
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}
