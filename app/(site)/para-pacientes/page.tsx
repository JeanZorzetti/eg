import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Para Pacientes | EG Telemedicina',
  description:
    'Tenha acesso a médicos especialistas de forma rápida, digital e acessível. Sem filas, sem deslocamento. EG Telemedicina.',
}

const steps = [
  {
    number: '01',
    title: 'Cadastre-se',
    description: 'Crie sua conta em poucos minutos, sem burocracia.',
  },
  {
    number: '02',
    title: 'Escolha o especialista',
    description: 'Selecione a especialidade e o horário ideal.',
  },
  {
    number: '03',
    title: 'Realize a consulta',
    description: 'Videoconsulta segura e privada de onde você estiver.',
  },
  {
    number: '04',
    title: 'Receba sua receita',
    description: 'Receita digital válida em todo o Brasil.',
  },
]

const benefits = [
  'Atendimento médico 24 horas',
  'Clínico geral e especialistas',
  'Receitas digitais válidas',
  'Solicitação de exames',
  'Orientação médica completa',
  'Mais de 30 especialidades',
  'Atendimento em todo o Brasil',
]

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Paciente de Pediatria',
    initials: 'MS',
    text: 'Atendimento incrível! O médico respondeu em minutos e meu filho foi atendido sem sair de casa.',
  },
  {
    name: 'Ricardo Mendes',
    role: 'Paciente de Clínica Geral',
    initials: 'RM',
    text: 'A praticidade da receita digital mudou minha vida. Recomendo a todos que buscam comodidade.',
  },
  {
    name: 'Ana Paula Costa',
    role: 'Paciente de Psicologia',
    initials: 'AC',
    text: 'Mesmo online, o atendimento foi muito humano e cuidadoso. Me senti acolhida desde o primeiro contato.',
  },
]

export default function ParaPacientesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26215C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              Para Pacientes
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              Saúde de qualidade onde você estiver
            </h1>
            <p className="text-lg text-purple-100 leading-relaxed mb-8">
              Tenha acesso a médicos especialistas de forma rápida, digital e acessível. Sem filas, sem deslocamento.
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
                <span className="text-[#4ade80] font-bold mr-1">&#10003;</span>+30 especialidades
              </span>
              <span>
                <span className="text-[#4ade80] font-bold mr-1">&#10003;</span>Plataforma segura
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona para você */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Como funciona para você</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Quatro passos simples para cuidar da sua saúde hoje mesmo.</p>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gray-200" />
                )}
                <div className="relative">
                  <div className="w-16 h-16 bg-[#7F77DD] text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-5 shadow-lg shadow-[#7F77DD]/25">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#26215C] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">O que você recebe</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Tudo que você precisa para cuidar da sua saúde em um único lugar.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white rounded-xl p-5 flex items-center gap-3 border border-gray-100 shadow-sm"
              >
                <div className="w-8 h-8 bg-[#EEEDFE] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#26215C]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que a EG? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#26215C] mb-5">
                Cuidar da sua saúde com tecnologia e humanidade
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Eliminamos as barreiras geográficas no acesso à saúde. Com a EG Telemedicina você tem médicos qualificados na palma da mão, 24 horas por dia, 7 dias por semana.
              </p>
              <ul className="space-y-3">
                {['Sem carência', 'Sem burocracia', 'Ativação imediata', 'Conformidade com CFM e LGPD'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#EEEDFE] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
                <div className="w-16 h-16 bg-[#EEEDFE] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#26215C] mb-1">EG Telemedicina</div>
                <div className="text-gray-500 text-sm">Saúde digital para todos.</div>
                <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-extrabold text-[#7F77DD]">+10k</div>
                    <div className="text-xs text-gray-400 mt-0.5">Pacientes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#7F77DD]">+30</div>
                    <div className="text-xs text-gray-400 mt-0.5">Especialidades</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-[#EEEDFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">O que dizem nossos pacientes</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Cuide da sua saúde com praticidade, onde e quando quiser.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#CECBF6]"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#7F77DD]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-6">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7F77DD] text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#26215C] text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#7F77DD] to-[#26215C] rounded-2xl px-10 py-16 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Comece agora. Cuide da sua saúde.</h2>
          <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto">
            Agende sua primeira consulta e descubra como a telemedicina pode transformar o seu cuidado com a saúde.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              Agendar consulta
            </Link>
            <Link
              href="/planos"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
