import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Protocolos | EG Telemedicina',
  description: 'Conheça os 5 protocolos comerciais e operacionais da EG Telemedicina: Telemedicina 24/7, NR-1, Mounjaro, TEA e Entrevista Qualificada.',
}

const protocolos = [
  {
    num: '01',
    title: 'Telemedicina',
    subtitle: 'Consultas médicas ilimitadas 24/7',
    desc: 'Acesso contínuo a consultas médicas online com profissionais qualificados, 24h por dia, 7 dias por semana — individual, familiar e empresarial.',
    href: '/protocolos/telemedicina',
    icon: '🩺',
  },
  {
    num: '02',
    title: 'Programa NR-1',
    subtitle: 'Saúde Mental Corporativa',
    desc: 'Conformidade legal com a NR-1 do MTE por meio de programa estruturado de suporte em saúde mental com atendimento psicológico, clínico e psiquiátrico.',
    href: '/protocolos/nr1',
    icon: '🧠',
  },
  {
    num: '03',
    title: 'Programa Mounjaro',
    subtitle: 'Emagrecimento Clínico Multidisciplinar',
    desc: 'Tratamento médico estruturado para emagrecimento sustentável com Tirzepatida, com acompanhamento multidisciplinar completo.',
    href: '/protocolos/mounjaro',
    icon: '⚖️',
  },
  {
    num: '04',
    title: 'Projeto TEA',
    subtitle: 'Transtorno do Espectro Autista',
    desc: 'Avaliação, diagnóstico e acompanhamento multidisciplinar estruturado para crianças com suspeita ou diagnóstico de TEA.',
    href: '/protocolos/tea',
    icon: '🧩',
  },
  {
    num: '05',
    title: 'Entrevista Qualificada',
    subtitle: 'Triagem Clínica para Operadoras',
    desc: 'Entrevista Qualificada Gravada de beneficiários para declaração de saúde, controle de sinistralidade e segurança jurídica.',
    href: '/protocolos/entrevista-qualificada',
    icon: '📋',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm">
            Protocolos Comerciais e Operacionais
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Nossos Protocolos
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Conheça os programas estruturados da EG Telemedicina. Soluções completas para pacientes, empresas e operadoras de saúde.
          </p>
          <a
            href="/protocolos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Baixar PDF completo
          </a>
        </div>
        <div className="mt-16 -mb-1">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-white">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-6">
            {protocolos.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="flex items-start gap-6 p-8 rounded-2xl border border-[#CECBF6] bg-[#EEEDFE]/20 hover:bg-[#EEEDFE]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-xs font-bold text-[#7F77DD] bg-[#EEEDFE] px-2.5 py-1 rounded-full">{p.num}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-[#26215C] mb-1 group-hover:text-[#7F77DD] transition-colors">{p.title}</h3>
                  <p className="text-sm font-medium text-[#7F77DD] mb-3">{p.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <svg className="h-5 w-5 text-[#CECBF6] group-hover:text-[#7F77DD] shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#7F77DD] to-[#26215C]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Quer saber mais sobre nossos protocolos?</h2>
          <p className="text-purple-100 mb-8">Entre em contato para conhecer condições especiais para sua empresa ou operadora.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
              Fale conosco
            </Link>
            <Link href="/empresas" className="border border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
              Para empresas
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
