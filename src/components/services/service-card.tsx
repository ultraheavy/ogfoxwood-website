import type { Service } from '@/types/service'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'

interface ServiceCardProps {
  readonly service: Service
  readonly index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div className="rounded-lg border border-border/50 bg-surface p-6">
        <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
        <p className="mb-4 text-sm text-foreground-muted">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-foreground-muted">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </AnimateOnScroll>
  )
}
