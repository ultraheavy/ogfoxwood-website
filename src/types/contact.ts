export type InquiryType = 'booking' | 'production' | 'collaboration' | 'other'

export interface ContactFormData {
  readonly name: string
  readonly email: string
  readonly inquiryType: InquiryType
  readonly message: string
  readonly eventDate?: string
  readonly venue?: string
}

export interface ContactFormState {
  readonly success: boolean
  readonly message: string
  readonly errors?: Readonly<Record<string, ReadonlyArray<string>>>
}
