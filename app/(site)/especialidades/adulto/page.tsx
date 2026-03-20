import type { Metadata } from 'next'
import { AgendarButton } from '@/components/AgendarModal'

export const metadata: Metadata = {
  title: 'Especialidades para Adultos | EG Telemedicina',
  description: 'Consultas online para adultos com mais de 20 especialidades médicas. Atendimento 24h, receita digital válida em todo o Brasil.',
}

const specialties = [
  'Angiologia', 'Alergologia', 'Cardiologia', 'Dermatologia',
  'Endocrinologia', 'Gastroenterologia', 'Geriatria', 'Ginecologia',
  'Hematologia', 'Infectologia', 'Nefrologia', 'Neurologia',
  'Ortopedia', 'Otorrinolaringologia', 'Pneumologia', 'Psiquiatria',
  'Reumatologia', 'Urologia', 'Fisiatria', 'Clínica Médica',
  'Clínico Geral', 'Médico da Família',
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm">
            👤 Saúde do Adulto
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Especialidades para adultos
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Cuidado completo para sua saúde em todas as fases da vida. Atendimento online com profissionais qualificados, sem filas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AgendarButton className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
              Agendar consulta
            </AgendarButton>
            <a href="/planos" className="border border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
              Ver planos
            </a>
          </div>
        </div>
        <div className="mt-16 -mb-1">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-white">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Grid de especialidades */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Nossas especialidades</h2>
            <p className="text-gray-500">Selecione a especialidade e agende sua consulta online agora mesmo.</p>
          </div>
          {/* grid-cols-1 no mobile evita overflow de palavras longas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialties.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 p-4 rounded-xl border border-[#CECBF6] bg-white hover:bg-[#EEEDFE] hover:border-[#7F77DD] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EEEDFE] flex items-center justify-center shrink-0 group-hover:bg-[#CECBF6] transition-colors">
                  <svg className="w-5 h-5 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#26215C] leading-tight">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <AgendarButton className="inline-flex bg-[#7F77DD] hover:bg-[#26215C] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg">
              Agendar consulta agora
            </AgendarButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#26215C] mb-4">Não encontrou sua especialidade?</h2>
          <p className="text-gray-500 mb-6">Entre em contato e nossa equipe irá te orientar sobre a melhor opção de atendimento.</p>
          <a href="/contato" className="inline-block bg-[#7F77DD] hover:bg-[#26215C] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
            Fale conosco
          </a>
        </div>
      </section>
    </main>
  )
}
