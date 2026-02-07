import { Badge } from '@/components/ui/badge'
import type { ShowStatus } from '@/types/show'

interface ShowStatusBadgeProps {
  readonly status: ShowStatus
}

const statusConfig: Record<ShowStatus, { label: string; variant: 'accent' | 'muted' | 'default' }> = {
  upcoming: { label: 'Upcoming', variant: 'accent' },
  past: { label: 'Past', variant: 'muted' },
  cancelled: { label: 'Cancelled', variant: 'default' },
}

export function ShowStatusBadge({ status }: ShowStatusBadgeProps) {
  const config = statusConfig[status]
  return <Badge variant={config.variant}>{config.label}</Badge>
}
