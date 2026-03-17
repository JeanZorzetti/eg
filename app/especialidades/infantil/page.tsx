import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Especialidades Infantis | EG Telemedicina',
  description: 'Atendimento pediátrico online humanizado e seguro. Especialidades infantis disponíveis 24h para bebês, crianças e adolescentes.',
}

const specialties = [
  'Alergologia Infantil', 'Endocrinologia Infantil', 'Gastroenterologia Infantil',
  'Neurologia Infantil', 'Ortopedia Infantil', 'Pneumologia Infantil',
  'Psiquiatria Infantil', 'Reumatologia Infantil', 'Psicologia Infantil', 'Pediatria',
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm">
            🧒 Saúde Infantil
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Especialidades infantis
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Atendimento humanizado e seguro para cuidar do desenvolvimento e bem-estar das crianças. Pediatras e especialistas infantis disponíveis 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
              Agendar consulta
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

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Especialidades disponíveis</h2>
            <p className="text-gray-500">Profissionais especializados no cuidado de bebês, crianças e adolescentes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((s) => (
              <Link
                key={s}
                href="/contato"
                className="flex items-center gap-3 p-4 rounded-xl border border-[#CECBF6] bg-white hover:bg-[#EEEDFE] hover:border-[#7F77DD] hover:-translate-y-1 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EEEDFE] flex items-center justify-center shrink-0 group-hover:bg-[#CECBF6] transition-colors">
                  <svg className="w-5 h-5 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#26215C]">{s}</span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contato" className="inline-block bg-[#7F77DD] hover:bg-[#26215C] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg">
              Agendar consulta infantil
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#26215C] mb-4">Cuidado especializado para quem mais importa</h2>
          <p className="text-gray-500 mb-6">Todos os nossos pediatras e especialistas infantis são devidamente credenciados pelo CFM, com experiência comprovada no atendimento pediátrico.</p>
          <Link href="/contato" className="inline-block bg-[#7F77DD] hover:bg-[#26215C] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
            Fale conosco
          </Link>
        </div>
      </section>
    </main>
  )
}
