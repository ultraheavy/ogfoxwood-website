'use client'

import { useState } from 'react'
import type { MusicRelease, MusicType } from '@/types/music'
import { MusicCard } from './music-card'

interface MusicGridProps {
  readonly releases: ReadonlyArray<MusicRelease>
}

const filterOptions: ReadonlyArray<{ readonly label: string; readonly value: MusicType | 'all' }> = [
  { label: 'All', value: 'all' },
  { label: 'Mixes', value: 'mix' },
  { label: 'Originals', value: 'track' },
  { label: 'Remixes', value: 'remix' },
]

export function MusicGrid({ releases }: MusicGridProps) {
  const [activeFilter, setActiveFilter] = useState<MusicType | 'all'>('all')

  const filtered =
    activeFilter === 'all'
      ? releases
      : releases.filter((r) => r.type === activeFilter)

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={activeFilter === option.value}
            onClick={() => setActiveFilter(option.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeFilter === option.value
                ? 'bg-accent text-background'
                : 'bg-surface text-foreground-muted hover:text-foreground'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((release, index) => (
          <MusicCard key={release.id} release={release} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-foreground-muted">
          No releases in this category yet.
        </p>
      )}
    </div>
  )
}
