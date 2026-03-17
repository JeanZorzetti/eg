import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'EG Telemedicina — Saúde de qualidade onde você estiver'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const logoData = await readFile(join(process.cwd(), 'public/logo.jpeg'))
  const logoSrc = `data:image/jpeg;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #26215C 0%, #2e2870 50%, #3D3580 100%)',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brilho litorâneo superior direito */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(127,119,221,0.35) 0%, transparent 70%)',
          }}
        />

        {/* Brilho inferior esquerdo */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: 80,
            width: 380,
            height: 280,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(206,203,246,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Onda decorativa inferior */}
        <svg
          style={{ position: 'absolute', bottom: 0, left: 0, width: 1200, opacity: 0.15 }}
          viewBox="0 0 1200 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 60 C200 110 400 10 600 60 C800 110 1000 10 1200 60 L1200 140 L0 140 Z" fill="#CECBF6" />
        </svg>
        <svg
          style={{ position: 'absolute', bottom: 0, left: 0, width: 1200, opacity: 0.08 }}
          viewBox="0 0 1200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 40 C300 90 600 0 900 50 C1050 75 1150 30 1200 40 L1200 100 L0 100 Z" fill="#7F77DD" />
        </svg>

        {/* Conteúdo principal */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '64px 80px',
          }}
        >
          {/* Logo + nome */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <img
              src={logoSrc}
              width={72}
              height={72}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ fontSize: 28, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
              EG Telemedicina
            </span>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 999,
                padding: '8px 20px',
                alignSelf: 'flex-start',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#CECBF6' }} />
              <span style={{ fontSize: 16, color: '#CECBF6', fontWeight: 500 }}>
                Médicos disponíveis agora
              </span>
            </div>

            <h1
              style={{
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.05,
                color: '#FFFFFF',
                letterSpacing: '-2px',
                margin: 0,
                maxWidth: 780,
              }}
            >
              Saúde de qualidade{' '}
              <span style={{ color: '#CECBF6' }}>onde você estiver</span>
            </h1>

            <p
              style={{
                fontSize: 24,
                color: '#B8B5CC',
                margin: 0,
                fontWeight: 300,
                maxWidth: 620,
                lineHeight: 1.4,
              }}
            >
              Consultas online com especialistas qualificados. Rápido, seguro e acessível.
            </p>
          </div>

          {/* Selos */}
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { icon: '🌊', text: 'Atendimento 24h' },
              { icon: '⚕️', text: '+30 especialidades' },
              { icon: '🔒', text: 'Plataforma segura' },
              { icon: '📋', text: 'Receita digital válida' },
            ].map((s) => (
              <div
                key={s.text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 999,
                  padding: '10px 20px',
                  fontSize: 15,
                  color: '#CECBF6',
                  fontWeight: 500,
                }}
              >
                <span>{s.icon}</span>
                {s.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
