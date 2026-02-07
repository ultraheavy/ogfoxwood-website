import type { ServiceSection } from '@/types/service'

export const serviceSections: ReadonlyArray<ServiceSection> = [
  {
    heading: 'DJ Services',
    description:
      'From intimate lounge sets to high-energy dance floors, every performance is tailored to the moment.',
    services: [
      {
        id: 'club-events',
        title: 'Club & Event DJ Sets',
        description:
          'Full-length DJ performances for clubs, bars, and event spaces. Genre-fluid sets that read the room and build the energy.',
        features: [
          'Custom set curation for your event',
          'Professional sound system consultation',
          'Genre-flexible: deep house, funk, soul, disco, techno',
          'Available for 1-6 hour sets',
        ],
      },
      {
        id: 'private-events',
        title: 'Private Events & Weddings',
        description:
          'Tasteful, curated music for private gatherings. From cocktail hour to after-party — seamless transitions that keep the vibe right.',
        features: [
          'Pre-event consultation and planning',
          'Cocktail, dinner, and dance floor sets',
          'Song request coordination',
          'Equipment provided or venue-integrated',
        ],
      },
      {
        id: 'brand-activations',
        title: 'Brand Activations',
        description:
          'Sonic branding for experiential marketing. The right music transforms a brand moment into a felt experience.',
        features: [
          'Custom playlist and vibe curation',
          'Live DJ for launches and pop-ups',
          'Music direction and consultation',
          'Post-event mix for digital content',
        ],
      },
    ],
  },
  {
    heading: 'Production Services',
    description:
      'Beyond the decks — original music, remixes, and sonic experiences crafted with intention.',
    services: [
      {
        id: 'original-production',
        title: 'Original Music Production',
        description:
          'Custom tracks and original productions. Deep house, funk-infused grooves, and soulful electronic music.',
        features: [
          'Full track production from concept to master',
          'Stems and multitrack delivery',
          'Revision rounds included',
          'Licensing-ready output',
        ],
      },
      {
        id: 'remix-services',
        title: 'Remix & Edit Services',
        description:
          'Breathing new life into existing tracks. Official remixes, DJ-friendly edits, and creative reinterpretations.',
        features: [
          'Official remixes for labels and artists',
          'DJ edits and extended versions',
          'Creative direction and A&R support',
          'Quick turnaround available',
        ],
      },
    ],
  },
]
