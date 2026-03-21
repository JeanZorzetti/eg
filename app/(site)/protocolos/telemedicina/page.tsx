import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EG Telemedicina | Protocolo 01',
  description: 'Consultas médicas ilimitadas 24/7 via videochamada com mais de 30 especialidades. Planos individual, familiar e empresarial.',
}

const planos = [
  {
    nome: 'Plano Individual',
    cobertura: '1 vida',
    preco: 'R$ 44,00',
    periodo: '/mês',
    features: [
      'Consultas com clínico geral',
      'Consultas com especialistas (+30 especialidades)',
      'Receitas e atestados digitais',
      'Atendimento rápido',
    ],
    nota: 'Perfeito para uso pessoal com previsibilidade de custo.',
  },
  {
    nome: 'Plano Familiar',
    cobertura: 'Até 4 membros',
    preco: 'R$ 162,00',
    periodo: '/mês',
    features: [
      'Todos os benefícios do individual',
      'Até 4 membros',
      'Economia vs consultas particulares',
      'Adultos e crianças',
    ],
    nota: 'Ideal para famílias que querem segurança médica mensal.',
  },
  {
    nome: 'Plano Familiar Pro',
    cobertura: 'Até 6 membros',
    preco: 'R$ 228,00',
    periodo: '/mês',
    destaque: true,
    badge: 'Mais popular',
    features: [
      'Todos os benefícios do familiar',
      'Até 6 membros',
      'Melhor custo por pessoa',
      'Suporte sempre disponível',
    ],
    nota: 'A melhor opção para famílias maiores.',
  },
  {
    nome: 'Plano Empresarial',
    cobertura: 'Equipes e empresas',
    preco: 'Sob consulta',
    features: [
      'Reduzir absenteísmo',
      'Aumentar produtividade',
      'Benefício de alto valor',
      'Atendimento sem deslocamentos',
    ],
    nota: 'Planos personalizados conforme o tamanho da equipe.',
  },
]

const sla = [
  { indicador: 'Tempo médio de espera — PA 24h', meta: 'Até 15 minutos' },
  { indicador: 'Disponibilidade da plataforma', meta: '99,5% uptime mensal' },
  { indicador: 'Envio de receita digital', meta: 'Até 2h após a consulta' },
  { indicador: 'Resposta ao agendamento', meta: 'Até 7 dias úteis' },
]

const escopo = [
  'Consultas médicas ilimitadas via videochamada, 24h/7 dias',
  'Mais de 30 especialidades disponíveis',
  'Emissão de receitas médicas digitais com validade legal',
  'Emissão de atestados e declarações médicas',
  'Encaminhamentos para especialistas e exames',
  'Plataforma própria para agendamento e acesso às consultas',
  'Histórico de consultas em prontuário digital',
]

const beneficiosEmpresa = [
  'Redução de custo com plano de saúde tradicional',
  'Redução de absenteísmo e presenteísmo',
  'Compliance com benefícios de saúde para o colaborador',
  'Relatório de utilização mensal para gestão de RH',
  'Implantação sem estoque ou infraestrutura física',
]

const beneficiosPaciente = [
  'Atendimento médico de qualidade sem deslocamento',
  'Disponível 24h — inclusive fins de semana e feriados',
  'Acesso via smartphone, tablet ou computador',
  'Histórico de saúde centralizado na plataforma',
  'Receitas e atestados válidos nacionalmente',
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm">
            Protocolo 01
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            EG Telemedicina
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Consultas médicas ilimitadas 24/7 com mais de 30 especialidades. Reduza absenteísmo, otimize custos de saúde e garanta cuidado preventivo.
          </p>
          <Link href="/planos" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
            Contratar agora
          </Link>
        </div>
        <div className="mt-16 -mb-1">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-white">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Escopo */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Escopo do Serviço</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {escopo.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-[#CECBF6]/50 bg-[#EEEDFE]/20">
                <svg className="h-5 w-5 text-[#7F77DD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Como Funciona</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#7F77DD] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">PA</span>
              </div>
              <h3 className="text-lg font-bold text-[#26215C] mb-3">Pronto-Atendimento 24h</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Acesse a plataforma, entre na fila e seja atendido pelo próximo médico disponível — sem agendamento prévio. Tempo médio de espera: até 15 minutos.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#7F77DD] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">AG</span>
              </div>
              <h3 className="text-lg font-bold text-[#26215C] mb-3">Consulta Agendada</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Para especialistas e multiprofissionais, o agendamento é realizado via plataforma. Acesso à consulta enviado por link exclusivo em até 7 dias úteis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Níveis de Serviço (SLA)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#7F77DD]">
                  <th className="text-left py-3 px-4 font-semibold text-[#26215C]">Indicador</th>
                  <th className="text-right py-3 px-4 font-semibold text-[#26215C]">Meta</th>
                </tr>
              </thead>
              <tbody>
                {sla.map((s) => (
                  <tr key={s.indicador} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-600">{s.indicador}</td>
                    <td className="py-3 px-4 text-right font-semibold text-[#7F77DD]">{s.meta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Benefícios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#26215C] mb-4">Para a Empresa</h3>
              <ul className="space-y-3">
                {beneficiosEmpresa.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="h-4 w-4 text-[#7F77DD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#26215C] mb-4">Para o Paciente</h3>
              <ul className="space-y-3">
                {beneficiosPaciente.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="h-4 w-4 text-[#7F77DD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-3 text-center">Planos e Preços</h2>
          <p className="text-gray-500 text-center mb-10">Sem carência, sem burocracia. Atendimento de onde você estiver.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {planos.map((p) => (
              <div key={p.nome} className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-200 hover:shadow-lg ${p.destaque ? 'border-[#7F77DD] ring-2 ring-[#7F77DD]/30 shadow-md' : 'border-gray-200'}`}>
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#7F77DD] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{p.badge}</span>
                  </div>
                )}
                <h3 className="text-base font-bold text-[#26215C] mb-1">{p.nome}</h3>
                <p className="text-xs text-gray-400 mb-3">{p.cobertura}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`font-extrabold ${p.periodo ? 'text-2xl text-[#7F77DD]' : 'text-base text-gray-500'}`}>{p.preco}</span>
                  {p.periodo && <span className="text-gray-400 text-xs">{p.periodo}</span>}
                </div>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="w-3.5 h-3.5 text-[#7F77DD] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 italic mb-4 border-t border-gray-100 pt-3">{p.nota}</p>
                <a
                  href="https://wa.me/5547991583876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 ${p.destaque ? 'bg-[#7F77DD] text-white hover:bg-[#26215C]' : 'border-2 border-[#7F77DD] text-[#7F77DD] hover:bg-[#EEEDFE]'}`}
                >
                  Contratar agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#7F77DD] to-[#26215C]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Comece a cuidar da saúde da sua equipe hoje</h2>
          <p className="text-purple-100 mb-8">Implantação rápida, sem infraestrutura física. Acesso para toda a empresa em poucos dias.</p>
          <Link href="/planos" className="inline-block bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
            Fale com um consultor
          </Link>
        </div>
      </section>
    </main>
  )
}
