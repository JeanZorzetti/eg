import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Planos | EG Telemedicina',
  description:
    'Cuidado médico acessível, sem burocracia e com atendimento rápido. Escolha o plano ideal para você e sua família.',
}

type Plan = {
  id: string
  name: string
  price: string
  period?: string
  subtitle: string
  features: string[]
  note: string
  ctaLabel: string
  highlighted?: boolean
  badge?: string
  icon: React.ReactNode
}

const PersonIcon = () => (
  <svg className="w-7 h-7 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const FamilyIcon = () => (
  <svg className="w-7 h-7 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-7 h-7 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const plans: Plan[] = [
  {
    id: 'individual',
    name: 'Plano Individual',
    price: 'R$ 44,00',
    period: '/mês',
    subtitle: 'Ideal para quem busca praticidade e economia.',
    features: [
      'Consultas online com clínico geral',
      'Receitas e atestados digitais',
      'Orientações médicas',
      'Atendimento rápido',
    ],
    note: 'Perfeito para uso pessoal com previsibilidade de custo.',
    ctaLabel: 'Contratar agora',
    icon: <PersonIcon />,
  },
  {
    id: 'familiar',
    name: 'Plano Familiar',
    price: 'R$ 162,00',
    period: '/mês',
    subtitle: 'Saúde para toda a família com excelente custo-benefício.',
    features: [
      'Todos os benefícios do individual',
      'Até 4 membros',
      'Economia vs consultas particulares',
      'Adultos e crianças',
    ],
    note: 'Ideal para famílias que querem segurança médica mensal.',
    ctaLabel: 'Contratar agora',
    icon: <FamilyIcon />,
  },
  {
    id: 'familiar-pro',
    name: 'Plano Familiar Pro',
    price: 'R$ 228,00',
    period: '/mês',
    subtitle: 'Mais pessoas protegidas, mais tranquilidade para você.',
    features: [
      'Todos do familiar',
      'Até 6 membros',
      'Melhor custo por pessoa',
      'Suporte sempre disponível',
    ],
    note: 'A melhor opção para famílias maiores.',
    ctaLabel: 'Contratar agora',
    highlighted: true,
    badge: 'Mais popular',
    icon: <FamilyIcon />,
  },
  {
    id: 'empresarial',
    name: 'Plano Empresarial',
    price: 'Sob consulta',
    subtitle: 'Soluções em saúde digital para empresas.',
    features: [
      'Reduzir absenteísmo',
      'Aumentar produtividade',
      'Benefício de alto valor',
      'Atendimento sem deslocamentos',
    ],
    note: 'Planos personalizados conforme o tamanho da equipe.',
    ctaLabel: 'Solicitar proposta',
    icon: <BuildingIcon />,
  },
]

const reasons = [
  'Sem carência',
  'Sem burocracia',
  'Atendimento de onde você estiver',
  'Saúde acessível',
]

const faqs = [
  {
    q: 'Como funciona a teleconsulta?',
    a: 'Você agenda online, escolhe especialidade e horário, e é atendido via videochamada. Rápido, seguro, sem sair de casa.',
  },
  {
    q: 'Quais especialidades estão disponíveis?',
    a: 'Mais de 30 especialidades: clínico geral, pediatria, psicologia, nutrição, cardiologia, dermatologia e muito mais.',
  },
  {
    q: 'As receitas são válidas em todo o Brasil?',
    a: 'Sim! Receitas digitais válidas em todo o território nacional, seguindo as normas do CFM.',
  },
  {
    q: 'Posso incluir dependentes no plano?',
    a: 'Sim! O Plano Familiar suporta até 4 membros e o Plano Familiar Pro suporta até 6 membros.',
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: 'Cartão de crédito, débito, PIX e boleto bancário.',
  },
]

export default function PlanosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26215C] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            Planos de Saúde Digital EG
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed">
            Cuidado médico acessível, sem burocracia e com atendimento rápido para você e sua família.
          </p>
        </div>
      </section>

      {/* Grid de planos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-200 hover:shadow-lg ${
                  plan.highlighted
                    ? 'border-[#7F77DD] ring-2 ring-[#7F77DD]/30 shadow-md'
                    : 'border-gray-200'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#7F77DD] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 bg-[#EEEDFE] rounded-xl flex items-center justify-center mb-4">
                  {plan.icon}
                </div>

                <div className="text-xl font-bold text-[#26215C] mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`font-extrabold ${plan.period ? 'text-3xl text-[#7F77DD]' : 'text-xl text-gray-500'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-5">{plan.subtitle}</p>

                <ul className="space-y-2 mb-5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#7F77DD] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-400 italic mb-5 border-t border-gray-100 pt-4">{plan.note}</p>

                <a
                  href="https://wa.me/5547991583876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold py-3 rounded-xl transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-[#7F77DD] text-white hover:bg-[#26215C]'
                      : 'border-2 border-[#7F77DD] text-[#7F77DD] hover:bg-[#EEEDFE]'
                  }`}
                >
                  {plan.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher a EG? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Por que escolher a EG?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Vantagens que fazem a diferença no seu dia a dia.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-3"
              >
                <div className="w-9 h-9 bg-[#EEEDFE] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#26215C]">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#26215C] mb-3">Perguntas frequentes</h2>
            <p className="text-gray-500">Tudo que você precisa saber antes de contratar.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-[#26215C] hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <svg
                    className="w-4 h-4 text-[#7F77DD] shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 pt-1 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#7F77DD] to-[#26215C] rounded-2xl px-10 py-16 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Sua saúde merece atenção agora</h2>
          <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto">
            Escolha seu plano e comece a cuidar da sua saúde hoje mesmo, com médicos qualificados a um clique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5547991583876"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              Contratar agora
            </a>
            <a
              href="https://wa.me/5547991583876"
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
