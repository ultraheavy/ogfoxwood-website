import type { Platform } from '@/types/music'

interface PlatformIconProps {
  readonly platform: Platform
  readonly className?: string
}

const platformLabels: Record<Platform, string> = {
  soundcloud: 'SoundCloud',
  mixcloud: 'Mixcloud',
  spotify: 'Spotify',
  youtube: 'YouTube',
  bandcamp: 'Bandcamp',
}

export function PlatformIcon({ platform, className = '' }: PlatformIconProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-foreground-muted transition-colors hover:text-foreground ${className}`}
    >
      {platformLabels[platform]}
    </span>
  )
}
