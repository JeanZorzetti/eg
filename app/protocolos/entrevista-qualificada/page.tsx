import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Entrevista Qualificada | EG Telemedicina',
  description: 'Triagem clínica para operadoras de saúde. Entrevista Qualificada Gravada com declaração de saúde, controle de sinistralidade e segurança jurídica.',
}

const precos = [
  { modalidade: 'Padrão (Médico CRM)', profissional: 'Médico Generalista', preco: 'R$ 135,00', precoB2B: 'R$ 112,50' },
  { modalidade: 'Técnico (COREN)', profissional: 'Técnico de Enfermagem', preco: 'R$ 105,00', precoB2B: 'R$ 87,50' },
]

const fluxo = [
  { step: '1', title: 'Recebimento', desc: 'Planilha de beneficiários enviada pela contratante' },
  { step: '2', title: 'Contato', desc: 'Contato com cada beneficiário para agendamento por telefone ou canal oficial' },
  { step: '3', title: 'Entrevista', desc: 'Entrevista gravada com profissional habilitado (Médico CRM ou Técnico COREN)' },
  { step: '4', title: 'Declaração', desc: 'Aplicação do questionário padronizado de Declaração de Saúde' },
  { step: '5', title: 'Retificação', desc: 'Detalhamento com CID, nome da doença e data do diagnóstico em caso positivo' },
  { step: '6', title: 'Confirmação', desc: 'Confirmação verbal pelo beneficiário durante a gravação' },
  { step: '7', title: 'Formalização', desc: 'Envio do documento ao beneficiário para assinatura' },
  { step: '8', title: 'Encaminhamento', desc: 'Dossiê completo enviado à operadora para análise técnica e CPT' },
]

const finalidades = [
  'Mapeamento de risco assistencial por beneficiário',
  'Controle de sinistralidade do plano',
  'Redução do risco de omissão de informações preexistentes',
  'Maior transparência contratual entre operadora e beneficiário',
  'Sustentabilidade financeira do plano de saúde',
  'Conformidade com normas ANS e legislação vigente',
]

const sla = [
  { indicador: 'Primeiro contato com beneficiário', meta: 'Até 2 dias úteis' },
  { indicador: 'Realização da entrevista após agendamento', meta: 'Até 5 dias úteis' },
  { indicador: 'Envio do documento de retificação', meta: 'Até 24h após a entrevista' },
  { indicador: 'Encaminhamento do dossiê à operadora', meta: 'Conforme data de corte' },
  { indicador: 'Relatório de produção', meta: 'Até o 3o dia útil após o corte' },
]

const beneficios = [
  'Redução de risco de fraude e omissão de preexistências',
  'Controle de sinistralidade com dados declarados e documentados',
  'Processo padronizado — segurança jurídica total',
  'Gestão operacional 100% pela EG — sem carga para o time da operadora',
  'Relatórios por lote e por data de corte',
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm">
            Protocolo 05
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Entrevista Qualificada
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-4">
            Triagem Clínica &middot; Declaração de Saúde &middot; Controle de Sinistralidade
          </p>
          <p className="text-base text-purple-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Entrevista Qualificada Gravada para operadoras de saúde, garantindo segurança jurídica, análise de risco assistencial e controle de sinistralidade conforme normas da ANS.
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
          <div className="grid sm:grid-cols-2 gap-4">
            {fluxo.map((f) => (
              <div key={f.step} className="flex items-start gap-3 p-5 rounded-xl border border-[#CECBF6]/50 bg-[#EEEDFE]/20">
                <span className="w-7 h-7 rounded-full bg-[#7F77DD] text-white text-xs font-bold flex items-center justify-center shrink-0">{f.step}</span>
                <div>
                  <h3 className="font-bold text-[#26215C] mb-1 text-sm">{f.title}</h3>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finalidade */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Finalidade Estratégica</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {finalidades.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                <svg className="h-5 w-5 text-[#7F77DD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Níveis de Serviço</h2>
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

      {/* Preços */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-3 text-center">Preços por Entrevista</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Cobrança por entrevista efetivamente realizada</p>
          <div className="grid md:grid-cols-2 gap-6">
            {precos.map((p) => (
              <div key={p.modalidade} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <h3 className="text-lg font-bold text-[#26215C] mb-1">{p.modalidade}</h3>
                <p className="text-sm text-gray-500 mb-4">{p.profissional}</p>
                <p className="text-3xl font-extrabold text-[#7F77DD] mb-1">{p.preco}</p>
                <p className="text-sm text-gray-400 mb-6">B2B: {p.precoB2B}</p>
                <Link href="/contato" className="inline-block bg-[#7F77DD] hover:bg-[#26215C] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm">
                  Solicitar proposta
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Benefícios para a Operadora</h2>
          <ul className="max-w-2xl mx-auto space-y-4">
            {beneficios.map((b) => (
              <li key={b} className="flex items-start gap-3 text-gray-600">
                <svg className="h-5 w-5 text-[#7F77DD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#7F77DD] to-[#26215C]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Controle de sinistralidade com segurança jurídica</h2>
          <p className="text-purple-100 mb-8">Processo padronizado, gravado e documentado. Gestão 100% pela nossa equipe.</p>
          <Link href="/contato" className="inline-block bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
            Solicitar proposta
          </Link>
        </div>
      </section>
    </main>
  )
}
