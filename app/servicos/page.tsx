import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Serviços | EG Telemedicina',
  description:
    'Especialidades médicas disponíveis na EG Telemedicina: Clínica Geral, Cardiologia, Psicologia, Pediatria, Dermatologia e Nutrição.',
}

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Clínica Geral',
    description:
      'Atendimento primário para sintomas gerais, check-ups e orientação preventiva. Ideal para consultas de rotina e avaliação inicial.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Cardiologia',
    description:
      'Cuidados especializados para o coração, monitoramento de pressão e prevenção cardiovascular. Consultas com cardiologistas experientes.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Psicologia',
    description:
      'Apoio à saúde mental em sessões seguras e confidenciais com psicólogos qualificados. Terapia online com toda a privacidade que você merece.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Pediatria',
    description:
      'Atendimento carinhoso e atento para bebês, crianças e adolescentes. Pediatras especializados para todas as fases do desenvolvimento infantil.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Dermatologia',
    description:
      'Diagnóstico e tratamento de doenças de pele, cabelo e unhas. Dermatologistas experientes para cuidar da sua saúde dermatológica.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Nutrição',
    description:
      'Planos alimentares personalizados para emagrecimento, ganho muscular e reeducação alimentar. Nutricionistas para um estilo de vida mais saudável.',
  },
]

const benefits = [
  'Consulta por videochamada em HD',
  'Receita digital com validade nacional',
  'Prontuário eletrônico seguro',
  'Atendimento em até 30 minutos',
  'Relatório pós-consulta por e-mail',
  'Sigilo médico garantido',
]

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#062e24] to-[#029641] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-4">
            Especialidades
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Oferecemos uma ampla gama de especialidades médicas para cuidar da sua saúde de forma completa e acessível.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="w-16 h-16 bg-[#f0fdf4] text-[#029641] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#029641] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#062e24] mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed flex-1 mb-6">{service.description}</p>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-[#029641] hover:bg-[#016d2f] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md"
                >
                  Agendar Agora
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#062e24] mb-4">
                O que está incluso em todas as consultas
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Independente da especialidade escolhida, todos os atendimentos da EG Telemedicina incluem recursos completos para o seu cuidado.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#029641] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-10 text-center border border-green-100">
              <div className="w-20 h-20 bg-[#029641] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#029641]/25">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#062e24] mb-3">Regulamentado pelo CFM</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Todas as consultas seguem as normas do Conselho Federal de Medicina e a Lei Geral de Proteção de Dados (LGPD).
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-[#029641] hover:bg-[#016d2f] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#029641]/25"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#f0fdf4] border-t border-green-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#062e24] font-semibold text-lg mb-2">
            Não encontrou o que procurava?
          </p>
          <p className="text-gray-500 mb-6">
            Entre em contato conosco. Nossa equipe está pronta para ajudar você a encontrar o especialista certo.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-[#029641] hover:bg-[#016d2f] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#029641]/25 hover:-translate-y-0.5"
          >
            Entre em Contato
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
