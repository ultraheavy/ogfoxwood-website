import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'OGFoxWood — DJ / Producer / Vibe Curator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              fontWeight: 500,
              color: '#d4a843',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            DJ / Producer / Vibe Curator
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#f0f0f0',
              letterSpacing: '-0.02em',
            }}
          >
            OGFoxWood
          </div>
          <div
            style={{
              width: '80px',
              height: '3px',
              background: '#d4a843',
              borderRadius: '2px',
              marginTop: '8px',
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  )
}
