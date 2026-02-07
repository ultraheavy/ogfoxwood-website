interface EmbedPlayerProps {
  readonly src: string
  readonly title: string
  readonly aspectRatio?: string
  readonly className?: string
}

export function EmbedPlayer({
  src,
  title,
  aspectRatio = '16/9',
  className = '',
}: EmbedPlayerProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-surface ${className}`}
      style={{ aspectRatio }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  )
}
