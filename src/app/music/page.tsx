import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { SoundCloudProfile } from '@/components/music/soundcloud-profile'
import { MusicGrid } from '@/components/music/music-grid'
import { releases } from '@/data/music'

export const metadata: Metadata = {
  title: 'Music',
  description: 'Mixes, original tracks, and remixes by OGFoxWood. Deep house, funk, and soul.',
}

export default function MusicPage() {
  return (
    <div className="py-24">
      <Container>
        <SectionHeading
          title="Music"
          subtitle="Mixes, originals, and remixes"
        />

        <SoundCloudProfile />

        <div className="mt-20">
          <h2 className="mb-8 font-heading text-2xl font-bold">Releases</h2>
          <MusicGrid releases={releases} />
        </div>
      </Container>
    </div>
  )
}
