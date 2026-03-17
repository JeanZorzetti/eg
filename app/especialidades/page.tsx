import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Especialidades | EG Telemedicina',
  description:
    'Mais de 30 especialidades médicas disponíveis para atendimento online com rapidez, segurança e profissionais qualificados.',
}

const stethoscopeIcon = (
  <svg className="w-5 h-5 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11a3 3 0 006 0V3M3 9h18" />
  </svg>
)

const adultSpecialties = [
  'Angiologia',
  'Alergologia',
  'Cardiologia',
  'Dermatologia',
  'Endocrinologia',
  'Gastroenterologia',
  'Geriatria',
  'Ginecologia',
  'Hematologia',
  'Infectologia',
  'Nefrologia',
  'Neurologia',
  'Ortopedia',
  'Otorrinolaringologia',
  'Pneumologia',
  'Psiquiatria',
  'Reumatologia',
  'Urologia',
  'Fisiatria',
  'Clínica Médica',
  'Clínico Geral',
  'Médico da Família',
]

const kidsSpecialties = [
  'Alergologia Infantil',
  'Endocrinologia Infantil',
  'Gastroenterologia Infantil',
  'Neurologia Infantil',
  'Ortopedia Infantil',
  'Pneumologia Infantil',
  'Psiquiatria Infantil',
  'Reumatologia Infantil',
  'Psicologia Infantil',
  'Pediatria',
]

const therapies = [
  {
    title: 'Psicologia',
    description: 'Acompanhamento psicológico online para adultos.',
  },
  {
    title: 'Psicologia Infantil',
    description: 'Suporte psicológico especializado para crianças.',
  },
  {
    title: 'Fisioterapia',
    description: 'Reabilitação e exercícios orientados por profissionais.',
  },
  {
    title: 'Nutrição',
    description: 'Planos alimentares personalizados com nutricionistas.',
  },
]

export default function EspecialidadesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26215C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              Especialistas prontos para cuidar de você e da sua família
            </h1>
            <p className="text-lg text-green-100 leading-relaxed mb-8">
              Mais de 30 especialidades médicas disponíveis para atendimento online com rapidez, segurança e profissionais qualificados.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contato"
                className="bg-[#7F77DD] hover:bg-[#26215C] text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200"
              >
                Agendar consulta
              </Link>
              <Link
                href="/planos"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200"
              >
                Conhecer planos
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-purple-200">
              <span>
                <span className="text-[#4ade80] font-bold mr-1">&#10003;</span>Atendimento 24h
              </span>
              <span>
                <span className="text-[#4ade80] font-bold mr-1">&#10003;</span>Médicos qualificados
              </span>
              <span>
                <span className="text-[#4ade80] font-bold mr-1">&#10003;</span>Plataforma segura
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades para adultos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Especialidades para adultos</h2>
            <p className="text-gray-500">Atendimento completo com médicos especialistas para todas as suas necessidades.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {adultSpecialties.map((specialty) => (
              <div
                key={specialty}
                className="border border-gray-200 rounded-xl p-4 flex items-center gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#EEEDFE] rounded-lg flex items-center justify-center shrink-0">
                  {stethoscopeIcon}
                </div>
                <span className="text-sm font-medium text-[#26215C]">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saúde infantil */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Saúde infantil</h2>
            <p className="text-gray-500">Especialistas dedicados ao cuidado e desenvolvimento das crianças.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {kidsSpecialties.map((specialty) => (
              <div
                key={specialty}
                className="border border-gray-200 bg-white rounded-xl p-4 flex items-center gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#EEEDFE] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#26215C]">{specialty}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contato"
              className="inline-block bg-[#7F77DD] hover:bg-[#26215C] text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200"
            >
              Agendar consulta infantil
            </Link>
          </div>
        </div>
      </section>

      {/* Terapias */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Terapias</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Atendimento terapêutico online para o seu bem-estar físico e mental.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {therapies.map((therapy) => (
              <div
                key={therapy.title}
                className="border border-gray-200 rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 bg-[#7F77DD] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#26215C] mb-2">{therapy.title}</h3>
                <p className="text-sm text-gray-500">{therapy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-[#7F77DD] rounded-2xl px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-3">Sua saúde merece atenção agora.</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Escolha a especialidade ideal e comece seu atendimento hoje mesmo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="bg-white text-[#7F77DD] hover:bg-green-50 font-bold px-7 py-3 rounded-xl transition-all duration-200"
            >
              Agendar consulta
            </Link>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-7 py-3 rounded-xl transition-all duration-200"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
