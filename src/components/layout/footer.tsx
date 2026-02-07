import Link from 'next/link'
import { siteConfig, navItems } from '@/data/site'
import { Container } from '@/components/ui/container'

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background-secondary py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="font-heading text-lg font-bold">
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-foreground-muted">
              DJ / Producer / Vibe Curator
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground-muted">
              Navigation
            </h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground-muted">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href={siteConfig.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                SoundCloud
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-sm text-foreground-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
