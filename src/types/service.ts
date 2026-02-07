export interface Service {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly features: ReadonlyArray<string>
}

export interface ServiceSection {
  readonly heading: string
  readonly description: string
  readonly services: ReadonlyArray<Service>
}
