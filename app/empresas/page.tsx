import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Para Empresas | EG Telemedicina',
  description:
    'Ofereça atendimento médico rápido e acessível para seus colaboradores, sem burocracia e com custo reduzido. EG Telemedicina para empresas.',
}

const benefits = [
  {
    title: 'Redução de absenteísmo',
    description: 'Colaboradores com acesso fácil à saúde faltam menos.',
    icon: (
      <svg className="w-6 h-6 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Mais produtividade',
    description: 'Equipe saudável trabalha com mais energia e foco.',
    icon: (
      <svg className="w-6 h-6 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Funcionários satisfeitos',
    description: 'Benefício valorizado que aumenta motivação e retenção.',
    icon: (
      <svg className="w-6 h-6 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Benefício acessível',
    description: 'Custo muito inferior aos planos de saúde tradicionais.',
    icon: (
      <svg className="w-6 h-6 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Implementação simples',
    description: 'Sem burocracia, ativação rápida e suporte completo.',
    icon: (
      <svg className="w-6 h-6 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const steps = [
  {
    number: '01',
    title: 'Empresa contrata o benefício',
    description: 'Escolha o plano ideal para sua equipe.',
  },
  {
    number: '02',
    title: 'Colaboradores recebem acesso',
    description: 'Ativação rápida na plataforma digital.',
  },
  {
    number: '03',
    title: 'Atendimento médico online 24h',
    description: 'Consultas com clínico geral e especialistas.',
  },
  {
    number: '04',
    title: 'Empresa acompanha resultados',
    description: 'Relatórios e métricas de utilização.',
  },
]

const testimonials = [
  {
    name: 'Ricardo Almeida',
    role: 'Diretor de RH',
    initials: 'RA',
    text: 'Reduzimos o absenteísmo em 30% após implementar a EG Telemedicina. Resultado impressionante e custo muito acessível.',
  },
  {
    name: 'Fernanda Costa',
    role: 'Gerente de Pessoas',
    initials: 'FC',
    text: 'Nossa equipe adorou o benefício. A facilidade de acesso e a qualidade dos médicos superaram nossas expectativas.',
  },
  {
    name: 'Marcos Oliveira',
    role: 'CEO',
    initials: 'MO',
    text: 'Investimento com retorno claro. Equipe mais saudável, mais produtiva e satisfeita com a empresa.',
  },
  {
    name: 'Ana Beatriz',
    role: 'Diretora Administrativa',
    initials: 'AB',
    text: 'A implementação foi rápida e sem burocracia. Em dias já tínhamos toda a equipe com acesso.',
  },
]

export default function EmpresasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26215C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              Para Empresas
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              Saúde acessível para seus colaboradores.
            </h1>
            <p className="text-lg text-green-100 leading-relaxed mb-8">
              Ofereça atendimento médico rápido e acessível sem burocracia e com custo reduzido.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contato"
                className="bg-[#7F77DD] hover:bg-[#26215C] text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200"
              >
                Solicitar proposta
              </Link>
              <Link
                href="/contato"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200"
              >
                Falar com especialista
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-purple-200">
              <span>
                <span className="text-[#4ade80] font-bold mr-1">&#10003;</span>Redução de custos
              </span>
              <span>
                <span className="text-[#4ade80] font-bold mr-1">&#10003;</span>Implementação rápida
              </span>
              <span>
                <span className="text-[#4ade80] font-bold mr-1">&#10003;</span>Atendimento nacional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios para sua empresa */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Benefícios para sua empresa</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Resultados reais que impactam diretamente a produtividade e o clima organizacional.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-[#EEEDFE] rounded-xl flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-[#26215C] mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Como funciona</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Processo simples e rápido para colocar seu time com acesso à saúde.</p>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gray-200" />
                )}
                <div className="relative">
                  <div className="w-16 h-16 bg-[#7F77DD] text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-5 shadow-lg shadow-[#7F77DD]/25">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold text-[#26215C] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparação */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">EG vs. plano tradicional</h2>
            <p className="text-gray-500">Uma comparação direta para você tomar a melhor decisão.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Plano tradicional */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="text-red-500 font-bold text-lg mb-1">Plano tradicional</div>
              <div className="text-2xl font-extrabold text-gray-800 mb-3">Alto custo</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Burocracia, carência e custos elevados que pesam no orçamento da empresa e demoram para ser implementados.
              </p>
              <ul className="mt-5 space-y-2">
                {['Alto custo mensal', 'Carência longa', 'Burocracia na adesão', 'Cobertura limitada'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* EG Telemedicina */}
            <div className="bg-white border-2 border-[#7F77DD] ring-2 ring-[#7F77DD]/20 rounded-2xl p-8 shadow-lg">
              <div className="text-[#7F77DD] font-bold text-lg mb-1">EG Telemedicina</div>
              <div className="text-2xl font-extrabold text-[#26215C] mb-3">Custo acessível</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sem carência, sem burocracia, ativação imediata. A solução certa para empresas que valorizam seus colaboradores.
              </p>
              <ul className="mt-5 space-y-2">
                {['Custo reduzido', 'Sem carência', 'Ativação imediata', 'Atendimento nacional'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#7F77DD] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">O que dizem as empresas parceiras</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Resultados reais de quem já implementou a EG Telemedicina.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#7F77DD]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed mb-5">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#7F77DD] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
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
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Cuide de quem faz seu negócio crescer
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
            Ofereça saúde de qualidade como benefício. Reduza custos e aumente a produtividade do seu time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="bg-white text-[#7F77DD] hover:bg-green-50 font-bold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              Solicitar proposta
            </Link>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
