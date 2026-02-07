import type { ServiceSection as ServiceSectionType } from '@/types/service'
import { SectionHeading } from '@/components/ui/section-heading'
import { ServiceCard } from './service-card'

interface ServiceSectionProps {
  readonly section: ServiceSectionType
}

export function ServiceSection({ section }: ServiceSectionProps) {
  return (
    <section>
      <SectionHeading title={section.heading} subtitle={section.description} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {section.services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
