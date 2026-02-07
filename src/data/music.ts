import type { MusicRelease } from '@/types/music'

export const releases: ReadonlyArray<MusicRelease> = [
  {
    id: 'golden-hour-mix',
    title: 'Golden Hour Vol. 1',
    type: 'mix',
    date: '2026-01-15',
    description: 'A sun-drenched journey through deep house and nu-disco. Perfect for golden hour.',
    links: [
      { platform: 'soundcloud', url: '#' },
      { platform: 'mixcloud', url: '#' },
    ],
  },
  {
    id: 'midnight-frequency',
    title: 'Midnight Frequency',
    type: 'mix',
    date: '2025-11-20',
    description: 'Late-night deep house and techno. Dark, groovy, relentless.',
    links: [
      { platform: 'soundcloud', url: '#' },
      { platform: 'mixcloud', url: '#' },
    ],
  },
  {
    id: 'afterglow',
    title: 'Afterglow',
    type: 'track',
    date: '2025-10-05',
    description: 'Original production — a warm, rolling deep house cut with analog synths.',
    links: [
      { platform: 'soundcloud', url: '#' },
      { platform: 'spotify', url: '#' },
      { platform: 'bandcamp', url: '#' },
    ],
  },
  {
    id: 'soul-circuit-remix',
    title: 'Soul Circuit (OGFoxWood Remix)',
    type: 'remix',
    date: '2025-08-12',
    description: 'Taking a classic soul vocal and weaving it into a peak-hour house framework.',
    links: [
      { platform: 'soundcloud', url: '#' },
      { platform: 'spotify', url: '#' },
    ],
  },
  {
    id: 'basement-tapes',
    title: 'Basement Tapes Vol. 2',
    type: 'mix',
    date: '2025-06-30',
    description: 'Raw, unfiltered selections from late-night sessions in the studio.',
    links: [
      { platform: 'mixcloud', url: '#' },
    ],
  },
]
