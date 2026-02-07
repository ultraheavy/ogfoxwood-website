export type ShowStatus = 'upcoming' | 'past' | 'cancelled'

export interface Show {
  readonly id: string
  readonly title: string
  readonly venue: string
  readonly location: string
  readonly date: string
  readonly time?: string
  readonly status: ShowStatus
  readonly ticketUrl?: string
  readonly description?: string
}
