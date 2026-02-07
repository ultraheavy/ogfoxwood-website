import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { ContactSchemaInput } from '@/lib/contact-schema'

interface BookingInquiryEmailProps {
  readonly data: ContactSchemaInput
}

const inquiryLabels: Record<string, string> = {
  booking: 'DJ Booking',
  production: 'Production Services',
  collaboration: 'Collaboration',
  other: 'Other',
}

export function BookingInquiryEmail({ data }: BookingInquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New inquiry from {data.name} — {inquiryLabels[data.inquiryType]}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>New Booking Inquiry</Heading>
          <Hr style={hrStyle} />

          <Section>
            <Text style={labelStyle}>Name</Text>
            <Text style={valueStyle}>{data.name}</Text>

            <Text style={labelStyle}>Email</Text>
            <Text style={valueStyle}>{data.email}</Text>

            <Text style={labelStyle}>Inquiry Type</Text>
            <Text style={valueStyle}>{inquiryLabels[data.inquiryType]}</Text>

            {data.eventDate && (
              <>
                <Text style={labelStyle}>Event Date</Text>
                <Text style={valueStyle}>{data.eventDate}</Text>
              </>
            )}

            {data.venue && (
              <>
                <Text style={labelStyle}>Venue</Text>
                <Text style={valueStyle}>{data.venue}</Text>
              </>
            )}

            <Text style={labelStyle}>Message</Text>
            <Text style={valueStyle}>{data.message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const bodyStyle = {
  backgroundColor: '#0a0a0a',
  fontFamily: 'Inter, system-ui, sans-serif',
}

const containerStyle = {
  margin: '0 auto',
  padding: '32px 24px',
  maxWidth: '560px',
}

const headingStyle = {
  color: '#d4a843',
  fontSize: '24px',
  fontWeight: '700' as const,
}

const hrStyle = {
  borderColor: '#333',
  margin: '16px 0',
}

const labelStyle = {
  color: '#888',
  fontSize: '12px',
  fontWeight: '600' as const,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  marginBottom: '4px',
}

const valueStyle = {
  color: '#ededed',
  fontSize: '16px',
  marginBottom: '16px',
}
