import type { MusicRelease } from '@/types/music'

function scEmbed(slug: string): string {
  return `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ogfoxwood/${slug}&color=%23e0a040&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`
}

function scUrl(slug: string): string {
  return `https://soundcloud.com/ogfoxwood/${slug}`
}

export const releases: ReadonlyArray<MusicRelease> = [
  {
    id: 'thats-what-she-said',
    title: 'Thats What She Said',
    type: 'track',
    date: '2019-01-01',
    description: 'Produced by Wiebe Kaai.',
    embedUrl: scEmbed('thats-what-she-said'),
    links: [{ platform: 'soundcloud', url: scUrl('thats-what-she-said') }],
  },
  {
    id: 'all-alone',
    title: 'All Alone (get this thang)',
    type: 'track',
    date: '2019-01-01',
    description: '482 plays. A world-influenced groove.',
    embedUrl: scEmbed('all-alone-get-this-thang'),
    links: [{ platform: 'soundcloud', url: scUrl('all-alone-get-this-thang') }],
  },
  {
    id: 'time-is-weird-ep',
    title: 'Time is Weird EP',
    type: 'mix',
    date: '2017-01-01',
    description: '7-track EP. Hip-hop & rap. Features Same Thang, Time Is Weird, Lips, Not The One, Lately, and more.',
    embedUrl: `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ogfoxwood/sets/time-is-weird&color=%23e0a040&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
    links: [{ platform: 'soundcloud', url: 'https://soundcloud.com/ogfoxwood/sets/time-is-weird' }],
  },
  {
    id: 'lips',
    title: 'Lips',
    type: 'track',
    date: '2017-01-01',
    description: '837 plays. From the Time is Weird EP.',
    embedUrl: scEmbed('lips'),
    links: [{ platform: 'soundcloud', url: scUrl('lips') }],
  },
  {
    id: 'vagabond',
    title: 'Vagabond',
    type: 'track',
    date: '2016-01-01',
    description: '1,166 plays. Hip-hop & rap.',
    embedUrl: scEmbed('vagabond'),
    links: [{ platform: 'soundcloud', url: scUrl('vagabond') }],
  },
  {
    id: 'what-you-wont-do-for-love',
    title: 'What You Wont Do For Love (Cover)',
    type: 'remix',
    date: '2016-01-01',
    description: '1,276 plays. A soulful cover.',
    embedUrl: scEmbed('what-you-wont-do-for-love-cover'),
    links: [{ platform: 'soundcloud', url: scUrl('what-you-wont-do-for-love-cover') }],
  },
  {
    id: 'vibez',
    title: 'Vibez ft. Tommy Knoxs and Tripp Boogie',
    type: 'track',
    date: '2015-01-01',
    description: '1,838 plays. Produced by 50bluntz.',
    embedUrl: scEmbed('vibez'),
    links: [{ platform: 'soundcloud', url: scUrl('vibez') }],
  },
  {
    id: 'rap-for-me',
    title: 'rap for me ft. muurdoch',
    type: 'track',
    date: '2015-01-01',
    description: '1,058 plays. Produced by bruceleekix.',
    embedUrl: scEmbed('rap-for-me-ft-muurdoch-prod-bruceleekix'),
    links: [{ platform: 'soundcloud', url: scUrl('rap-for-me-ft-muurdoch-prod-bruceleekix') }],
  },
  {
    id: '10',
    title: '10',
    type: 'track',
    date: '2016-01-01',
    description: '508 plays. Folk & singer-songwriter.',
    embedUrl: scEmbed('10a'),
    links: [{ platform: 'soundcloud', url: scUrl('10a') }],
  },
]
