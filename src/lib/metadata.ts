import { siteConfig } from '@/data/site'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: siteConfig.name,
    alternateName: 'Devon Pittman',
    description: siteConfig.description,
    url: siteConfig.url,
    genre: ['Deep House', 'Funk', 'Soul', 'Electronic'],
    sameAs: [
      siteConfig.instagram,
      siteConfig.soundcloud,
      siteConfig.mixcloud,
    ],
  }
}

export function eventJsonLd(events: ReadonlyArray<{
  readonly title: string
  readonly venue: string
  readonly location: string
  readonly date: string
  readonly time?: string
  readonly ticketUrl?: string
  readonly description?: string
}>) {
  return events.map((event) => ({
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: event.title,
    startDate: event.date,
    location: {
      '@type': 'Place',
      name: event.venue,
      address: event.location,
    },
    performer: {
      '@type': 'MusicGroup',
      name: siteConfig.name,
    },
    ...(event.description ? { description: event.description } : {}),
    ...(event.ticketUrl ? { offers: { '@type': 'Offer', url: event.ticketUrl } } : {}),
  }))
}
