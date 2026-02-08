import { Hero } from '@/components/home/hero'
import { BioPreview } from '@/components/home/bio-preview'
import { SoundCloudEmbed } from '@/components/home/video-embed'
import { CtaBooking } from '@/components/home/cta-booking'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BioPreview />
      <SoundCloudEmbed />
      <CtaBooking />
    </>
  )
}
