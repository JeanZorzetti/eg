import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EG Telemedicina | Saúde de qualidade onde você estiver',
  description:
    'Consultas médicas online com especialistas qualificados. Atendimento rápido, seguro e acessível de onde você estiver. EG Telemedicina — cuidando da sua saúde com tecnologia e humanidade.',
  keywords: [
    'telemedicina',
    'consulta online',
    'médico online',
    'saúde digital',
    'EG Telemedicina',
  ],
  openGraph: {
    title: 'EG Telemedicina | Saúde de qualidade onde você estiver',
    description:
      'Consultas médicas online com especialistas qualificados. Atendimento rápido, seguro e acessível.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
