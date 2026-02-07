interface SectionHeadingProps {
  readonly title: string
  readonly subtitle?: string
  readonly align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 ${alignment}`}>
      <h2 className="font-heading text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-foreground-muted">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-0.5 w-16 bg-accent ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
