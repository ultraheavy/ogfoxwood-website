interface PlaceholderImageProps {
  readonly width?: number
  readonly height?: number
  readonly label?: string
  readonly className?: string
}

export function PlaceholderImage({
  width = 400,
  height = 400,
  label = 'Photo',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-surface text-foreground-muted ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      role="img"
      aria-label={label}
    >
      <div className="text-center">
        <svg
          className="mx-auto mb-2 h-10 w-10 opacity-40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <span className="text-sm">{label}</span>
      </div>
    </div>
  )
}
