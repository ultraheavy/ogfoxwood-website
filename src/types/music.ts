export type MusicType = 'mix' | 'track' | 'remix'

export type Platform = 'soundcloud' | 'spotify' | 'youtube' | 'bandcamp'

export interface MusicRelease {
  readonly id: string
  readonly title: string
  readonly type: MusicType
  readonly date: string
  readonly description?: string
  readonly embedUrl?: string
  readonly links: ReadonlyArray<{
    readonly platform: Platform
    readonly url: string
  }>
}
