import type { MusicRelease } from '@/types/music'
import { Badge } from '@/components/ui/badge'
import { PlatformIcon } from './platform-icon'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'

interface MusicCardProps {
  readonly release: MusicRelease
  readonly index: number
}

const typeLabels: Record<MusicRelease['type'], string> = {
  mix: 'Mix',
  track: 'Original',
  remix: 'Remix',
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export function MusicCard({ release, index }: MusicCardProps) {
  return (
    <AnimateOnScroll delay={index * 0.1}>
      <article className="flex flex-col rounded-lg border border-border/50 bg-surface p-6">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="accent">{typeLabels[release.type]}</Badge>
          <span className="text-xs text-foreground-muted">
            {formatDate(release.date)}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold">{release.title}</h3>

        {release.description && (
          <p className="mb-4 text-sm text-foreground-muted">
            {release.description}
          </p>
        )}

        {release.embedUrl && (
          <div className="mb-4 overflow-hidden rounded-md">
            <iframe
              title={release.title}
              width="100%"
              height={166}
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={release.embedUrl}
              className="block"
            />
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {release.links.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlatformIcon platform={link.platform} />
            </a>
          ))}
        </div>
      </article>
    </AnimateOnScroll>
  )
}
