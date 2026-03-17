import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Como Funciona | EG Telemedicina',
  description:
    'Simples, rápido e digital. Atendimento médico de verdade em poucos minutos, onde você estiver. Conheça o passo a passo da EG Telemedicina.',
}

type Step = {
  number: string
  label: string
  title: string
  badge?: string
  description: string
  extras?: { type: 'list'; items: string[] } | { type: 'highlights-only' }
  highlights: string[]
}

const steps: Step[] = [
  {
    number: '1',
    label: 'Passo 1',
    title: 'Cadastro rápido na plataforma',
    description:
      'O cliente cria sua conta em poucos minutos e já pode acessar os serviços de saúde disponíveis, sem burocracia.',
    highlights: ['Processo simples', 'Acesso imediato', 'Plataforma segura'],
  },
  {
    number: '2',
    label: 'Passo 2',
    title: 'Escolha como deseja ser atendido',
    description:
      'Você pode optar por planos mensais ou por consultas avulsas. Tudo com preços acessíveis.',
    highlights: ['Planos acessíveis', 'Consulta sob demanda', 'Liberdade de escolha'],
  },
  {
    number: '3',
    label: 'Passo 3',
    badge: '24h por dia',
    title: 'Atendimento médico imediato',
    description:
      'Após a solicitação, o paciente é atendido por médico de plantão disponível 24h/7 dias.',
    extras: {
      type: 'list',
      items: [
        'Clínico Geral',
        'Médico da Família',
        'Pediatra',
        'Receita digital',
        'Exames',
        'Atestados',
        'Orientações',
        'Encaminhamento',
      ],
    },
    highlights: ['Médicos disponíveis 24h', 'Atendimento humanizado', 'Resolução rápida'],
  },
  {
    number: '4',
    label: 'Passo 4',
    title: 'Encaminhamento para especialistas',
    description:
      'Caso precise de acompanhamento específico, é direcionado para o especialista mais adequado.',
    extras: {
      type: 'list',
      items: ['Avaliação completa', 'Diagnóstico', 'Tratamento', 'Retorno médico'],
    },
    highlights: ['+30 especialidades', 'Continuidade do cuidado', 'Acompanhamento profissional'],
  },
  {
    number: '5',
    label: 'Passo 5',
    title: 'Documentos médicos digitais válidos',
    description:
      'Receitas, atestados, exames e orientações entregues diretamente pela plataforma.',
    highlights: ['Receita digital válida', 'Documentos seguros', 'Acesso imediato'],
  },
]

const credibilityItems = [
  'Atendimento médico 24 horas',
  'Profissionais qualificados',
  'Plataforma segura',
  'Atendimento em todo o Brasil',
  'Mais de 30 especialidades',
]

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26215C] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">Como funciona</h1>
          <p className="text-lg text-purple-100 leading-relaxed">
            Simples, rápido e digital. Atendimento médico de verdade em poucos minutos, onde você estiver.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mobile: lista com linha esquerda */}
          <div className="relative lg:hidden">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="relative pl-14">
                  <div className="absolute left-0 w-10 h-10 bg-[#7F77DD] text-white rounded-full flex items-center justify-center font-extrabold text-sm shadow-lg shadow-[#7F77DD]/25">
                    {step.number}
                  </div>
                  <StepCard step={step} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: layout alternado esq/dir com linha vertical central */}
          <div className="relative hidden lg:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-px" />
            <div className="space-y-12">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div key={step.number} className="relative grid grid-cols-2 gap-8 items-center">
                    {/* Número no centro */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#7F77DD] text-white rounded-full flex items-center justify-center font-extrabold text-lg z-10 shadow-lg shadow-[#7F77DD]/25">
                      {step.number}
                    </div>

                    {isLeft ? (
                      <>
                        <div className="pr-10 text-right">
                          <StepCard step={step} align="right" />
                        </div>
                        <div className="pl-10" />
                      </>
                    ) : (
                      <>
                        <div className="pr-10" />
                        <div className="pl-10">
                          <StepCard step={step} align="left" />
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de credibilidade */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#7F77DD] rounded-2xl py-8 px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-white text-center">
            {credibilityItems.map((item) => (
              <div key={item} className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-purple-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#26215C] mb-4">
            Cuidar da sua saúde nunca foi tão fácil.
          </h2>
          <p className="text-gray-500 mb-8">
            Comece agora e tenha acesso a médicos qualificados em poucos minutos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="bg-[#7F77DD] hover:bg-[#26215C] text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200"
            >
              Quero atendimento agora
            </Link>
            <Link
              href="/planos"
              className="border-2 border-[#7F77DD] text-[#7F77DD] hover:bg-[#EEEDFE] font-semibold px-7 py-3 rounded-xl transition-all duration-200"
            >
              Conhecer os planos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function StepCard({ step, align }: { step: Step; align?: 'left' | 'right' }) {
  const isRight = align === 'right'
  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-200">
      <div className={`flex items-center gap-2 mb-2 ${isRight ? 'justify-end' : ''}`}>
        <span className="text-xs font-bold text-[#7F77DD] uppercase tracking-wide">{step.label}</span>
        {step.badge && (
          <span className="bg-[#7F77DD] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {step.badge}
          </span>
        )}
      </div>
      <h3 className={`text-lg font-bold text-[#26215C] mb-2 ${isRight ? 'text-right' : ''}`}>{step.title}</h3>
      <p className={`text-sm text-gray-500 leading-relaxed mb-4 ${isRight ? 'text-right' : ''}`}>{step.description}</p>

      {step.extras?.type === 'list' && (
        <div className={`flex flex-wrap gap-1.5 mb-4 ${isRight ? 'justify-end' : ''}`}>
          {step.extras.items.map((item) => (
            <span
              key={item}
              className="bg-[#EEEDFE] text-[#7F77DD] text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className={`border-t border-gray-100 pt-3 flex flex-wrap gap-3 ${isRight ? 'justify-end' : ''}`}>
        {step.highlights.map((h) => (
          <span key={h} className="flex items-center gap-1 text-xs text-gray-500">
            <svg className="w-3.5 h-3.5 text-[#7F77DD] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {h}
          </span>
        ))}
      </div>
    </div>
  )
}
