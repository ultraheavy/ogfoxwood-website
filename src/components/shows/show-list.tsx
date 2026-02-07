import type { Show } from '@/types/show'
import { ShowCard } from './show-card'
import { SectionHeading } from '@/components/ui/section-heading'

interface ShowListProps {
  readonly title: string
  readonly subtitle?: string
  readonly shows: ReadonlyArray<Show>
}

export function ShowList({ title, subtitle, shows }: ShowListProps) {
  if (shows.length === 0) return null

  return (
    <section>
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="flex flex-col gap-4">
        {shows.map((show, index) => (
          <ShowCard key={show.id} show={show} index={index} />
        ))}
      </div>
    </section>
  )
}
