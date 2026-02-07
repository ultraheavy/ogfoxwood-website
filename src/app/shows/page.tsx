import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { ShowList } from '@/components/shows/show-list'
import { shows } from '@/data/shows'
import { eventJsonLd } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Shows',
  description: 'Upcoming and past OGFoxWood DJ sets, events, and performances.',
}

export default function ShowsPage() {
  const upcoming = shows.filter((show) => show.status === 'upcoming')
  const past = shows.filter((show) => show.status === 'past')

  return (
    <div className="py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd(upcoming)),
        }}
      />
      <Container>
        <div className="space-y-20">
          <ShowList
            title="Upcoming Shows"
            subtitle="Catch the next set"
            shows={upcoming}
          />
          <ShowList
            title="Past Shows"
            subtitle="Where the vibes have been"
            shows={past}
          />
        </div>
      </Container>
    </div>
  )
}
