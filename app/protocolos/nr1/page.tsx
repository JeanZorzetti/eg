import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Programa NR-1 | EG Telemedicina',
  description: 'Conformidade legal com a NR-1 do MTE. Programa estruturado de saúde mental corporativa com atendimento psicológico, clínico e psiquiátrico via telemedicina.',
}

const pacotes = [
  {
    nome: 'Pacote 1 — Clínico',
    desc: 'Suporte Psicossocial Inicial',
    indicacao: 'Estresse, ansiedade leve a moderada, sofrimento emocional inicial e sinais iniciais de burnout',
    opcoes: [
      { freq: 'Quinzenal', comp: '1 Clínico + 2 Psicólogos/mês', preco: 'R$ 174,33/colab' },
      { freq: 'Semanal', comp: '1 Clínico + 4 Psicólogos/mês', preco: 'R$ 281,61/colab' },
    ],
  },
  {
    nome: 'Pacote 2 — Psiquiátrico',
    desc: 'Suporte Psicossocial Especializado',
    indicacao: 'Burnout moderado a grave, ansiedade persistente, depressão ou necessidade de medicação',
    opcoes: [
      { freq: 'Quinzenal', comp: '1 Psiquiatra + 2 Psicólogos/mês', preco: 'R$ 262,26/colab' },
      { freq: 'Semanal', comp: '1 Psiquiatra + 4 Psicólogos/mês', preco: 'R$ 369,54/colab' },
    ],
  },
]

const fluxo = [
  { step: '1', title: 'Implantação', desc: 'Pro Life configura a plataforma e disponibiliza link exclusivo para o RH' },
  { step: '2', title: 'Acesso', desc: 'Colaborador acessa o portal e agenda diretamente — sem intermediação do RH' },
  { step: '3', title: 'Triagem', desc: 'Psicólogo realiza acolhimento e identifica a necessidade assistencial' },
  { step: '4', title: 'Encaminhamento', desc: 'Direcionamento automático conforme nível: orientativo, clínico ou psiquiátrico' },
  { step: '5', title: 'Acompanhamento', desc: 'Acompanhamento contínuo dentro da plataforma' },
  { step: '6', title: 'Relatório', desc: 'Relatório mensal enviado ao RH com indicadores anonimizados (LGPD)' },
]

const beneficiosEmpresa = [
  'Conformidade legal com a NR-1 — evita multas e passivos trabalhistas',
  'Redução de afastamentos por causas psicossociais',
  'Menor custo versus plano de saúde convencional',
  'Relatório mensal com evidência documental para auditorias',
  'Implantação em até 5 dias úteis, sem infraestrutura física',
  'Programa escalável — atende de 10 a 10.000 colaboradores',
]

const beneficiosColab = [
  'Acesso confidencial e sem estigma — agenda diretamente pelo app',
  'Suporte psicológico de qualidade sem custo adicional',
  'Continuidade de cuidado com o mesmo psicólogo',
  'Encaminhamento médico quando necessário, dentro da mesma plataforma',
  'Atendimento 100% remoto — sem deslocamento ou exposição',
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm">
            Protocolo 02
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Programa NR-1
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-4">
            Saúde Mental Corporativa &middot; Conformidade Legal
          </p>
          <p className="text-base text-purple-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Garantia de conformidade com a NR-1 do MTE por meio de programa estruturado de suporte em saúde mental, com atendimento psicológico, clínico e psiquiátrico via telemedicina.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
              Solicitar proposta
            </Link>
            <Link href="/protocolos" className="border border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
              Todos os protocolos
            </Link>
          </div>
        </div>
        <div className="mt-16 -mb-1">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-white">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Fluxo */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Fluxo Operacional</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fluxo.map((f) => (
              <div key={f.step} className="rounded-2xl border border-[#CECBF6]/50 bg-[#EEEDFE]/20 p-6">
                <span className="inline-block w-8 h-8 rounded-full bg-[#7F77DD] text-white text-sm font-bold flex items-center justify-center mb-3">{f.step}</span>
                <h3 className="font-bold text-[#26215C] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Pacotes Assistenciais</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pacotes.map((p) => (
              <div key={p.nome} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#26215C] mb-1">{p.nome}</h3>
                <p className="text-sm font-medium text-[#7F77DD] mb-4">{p.desc}</p>
                <div className="bg-[#EEEDFE] rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-[#26215C] mb-1">Indicado para:</p>
                  <p className="text-sm text-gray-600">{p.indicacao}</p>
                </div>
                <div className="space-y-3">
                  {p.opcoes.map((o) => (
                    <div key={o.freq} className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                      <div>
                        <p className="text-sm font-semibold text-[#26215C]">{o.freq}</p>
                        <p className="text-xs text-gray-400">{o.comp}</p>
                      </div>
                      <span className="text-sm font-bold text-[#7F77DD]">{o.preco}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
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
              <h3 className="text-lg font-bold text-[#26215C] mb-4">Para o Colaborador</h3>
              <ul className="space-y-3">
                {beneficiosColab.map((b) => (
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#7F77DD] to-[#26215C]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Garanta a conformidade da sua empresa com a NR-1</h2>
          <p className="text-purple-100 mb-8">Implantação em até 5 dias úteis. Sem infraestrutura física. Programa escalável de 10 a 10.000 colaboradores.</p>
          <Link href="/contato" className="inline-block bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
            Solicitar proposta
          </Link>
        </div>
      </section>
    </main>
  )
}
