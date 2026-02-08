import { siteConfig } from '@/data/site'

const SOUNDCLOUD_EMBED_URL = `https://w.soundcloud.com/player/?url=${encodeURIComponent(siteConfig.soundcloud)}&color=%23e0a040&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`

export function SoundCloudProfile() {
  return (
    <div>
      <div className="overflow-hidden rounded-lg">
        <iframe
          title="OGFoxWood on SoundCloud"
          width="100%"
          height={500}
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={SOUNDCLOUD_EMBED_URL}
          className="block"
        />
      </div>
      <p className="mt-3 text-center text-sm text-foreground-muted">
        <a
          href={siteConfig.soundcloud}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          Follow OGFoxWood on SoundCloud
        </a>
      </p>
    </div>
  )
}
