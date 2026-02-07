import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be 100 characters or less'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  inquiryType: z.enum(['booking', 'production', 'collaboration', 'other'], {
    error: 'Please select an inquiry type',
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be 2000 characters or less'),
  eventDate: z.string().optional(),
  venue: z
    .string()
    .max(200, 'Venue must be 200 characters or less')
    .optional(),
})

export type ContactSchemaInput = z.infer<typeof contactSchema>
