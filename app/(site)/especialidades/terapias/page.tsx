import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terapias Online | EG Telemedicina',
  description: 'Psicologia, fisioterapia e nutrição online. Acompanhamento contínuo para evolução do seu bem-estar físico e mental.',
}

const therapies = [
  {
    title: 'Psicologia',
    desc: 'Acompanhamento psicológico online para adultos em sessões seguras, privadas e confidenciais com psicólogos qualificados.',
    badge: '👁 Para adultos',
  },
  {
    title: 'Psicologia Infantil',
    desc: 'Suporte psicológico especializado para crianças e adolescentes, com abordagem lúdica e humanizada.',
    badge: '🧒 Para crianças',
  },
  {
    title: 'Fisioterapia',
    desc: 'Reabilitação e exercícios orientados por fisioterapeutas especializados, sem sair de casa.',
    badge: '💪 Reabilitação',
  },
  {
    title: 'Nutrição',
    desc: 'Planos alimentares personalizados com nutricionistas para emagrecimento, ganho muscular e reeducação alimentar.',
    badge: '🥗 Bem-estar',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm">
            🌿 Terapias & Bem-estar
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Cuidado completo para<br />corpo e mente
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Profissionais especializados para acompanhamento contínuo e evolução do seu bem-estar. Sessões online, seguras e no seu ritmo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
              Agendar sessão
            </Link>
            <Link href="/planos" className="border border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
              Ver planos
            </Link>
          </div>
        </div>
        <div className="mt-16 -mb-1">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-white">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Cards de terapias */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Nossas terapias</h2>
            <p className="text-gray-500">Acompanhamento contínuo com profissionais especializados para sua evolução.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {therapies.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[#CECBF6] bg-[#EEEDFE]/30 p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <span className="inline-block mb-4 text-xs font-semibold px-3 py-1 rounded-full bg-[#CECBF6] text-[#26215C]">
                  {t.badge}
                </span>
                <h3 className="text-xl font-bold text-[#26215C] mb-3">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.desc}</p>
                <Link href="/contato" className="inline-block text-sm font-semibold text-[#7F77DD] hover:text-[#26215C] transition-colors">
                  Agendar sessão →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#7F77DD] to-[#26215C]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Comece seu acompanhamento hoje</h2>
          <p className="text-purple-100 mb-8">Cuidar da saúde mental e física é um investimento que transforma vidas. Dê o primeiro passo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
              Agendar agora
            </Link>
            <Link href="/planos" className="border border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
              Ver planos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
