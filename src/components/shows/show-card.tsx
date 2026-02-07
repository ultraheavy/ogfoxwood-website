import type { Show } from '@/types/show'
import { ShowStatusBadge } from './show-status-badge'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'

interface ShowCardProps {
  readonly show: Show
  readonly index: number
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function ShowCard({ show, index }: ShowCardProps) {
  return (
    <AnimateOnScroll delay={index * 0.1}>
      <article className="flex flex-col gap-4 rounded-lg border border-border/50 bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-3">
            <h3 className="text-lg font-semibold">{show.title}</h3>
            <ShowStatusBadge status={show.status} />
          </div>
          <p className="text-sm text-foreground-muted">
            {show.venue} &middot; {show.location}
          </p>
          <p className="mt-1 text-sm text-foreground-muted">
            {formatDate(show.date)}
            {show.time ? ` at ${show.time}` : ''}
          </p>
          {show.description && (
            <p className="mt-2 text-sm text-foreground-muted">{show.description}</p>
          )}
        </div>

        {show.ticketUrl && show.status === 'upcoming' && (
          <a
            href={show.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent-muted"
          >
            Get Tickets
          </a>
        )}
      </article>
    </AnimateOnScroll>
  )
}
