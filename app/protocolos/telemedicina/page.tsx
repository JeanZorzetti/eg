import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Protocolo Telemedicina | EG Telemedicina',
  description: 'Consultas médicas ilimitadas 24/7 via videochamada com mais de 32 especialidades. Planos individual, familiar e empresarial.',
}

const planos = [
  { nome: 'Individual', cobertura: '1 vida · acesso completo', preco: 'R$ 37,00/mês' },
  { nome: 'Familiar (4v)', cobertura: 'Até 4 vidas', preco: 'R$ 127,00/mês' },
  { nome: 'Familiar+ (6v)', cobertura: 'Até 6 vidas · Premium', preco: 'R$ 247,00/mês' },
  { nome: 'Empresarial', cobertura: 'Por colaborador/mês', preco: 'A partir de R$ 26,70/vida' },
]

const sla = [
  { indicador: 'Tempo médio de espera — PA 24h', meta: 'Até 15 minutos' },
  { indicador: 'Disponibilidade da plataforma', meta: '99,5% uptime mensal' },
  { indicador: 'Envio de receita digital', meta: 'Até 2h após a consulta' },
  { indicador: 'Resposta ao agendamento', meta: 'Até 7 dias úteis' },
]

const escopo = [
  'Consultas médicas ilimitadas via videochamada, 24h/7 dias',
  'Mais de 32 especialidades disponíveis',
  'Emissão de receitas médicas digitais com validade legal',
  'Emissão de atestados e declarações médicas',
  'Encaminhamentos para especialistas e exames',
  'App próprio para agendamento e acesso às consultas',
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
  'Histórico de saúde centralizado no app',
  'Receitas e atestados válidos em qualquer farmácia',
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
            Telemedicina EG
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Consultas médicas ilimitadas 24/7 com mais de 32 especialidades. Reduza absenteísmo, otimize custos de saúde e garanta cuidado preventivo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
              Contratar agora
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
                Acesse o app, entre na fila e seja atendido pelo próximo médico disponível — sem agendamento prévio. Tempo médio de espera: até 15 minutos.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#7F77DD] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">AG</span>
              </div>
              <h3 className="text-lg font-bold text-[#26215C] mb-3">Consulta Agendada</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Para especialistas e multiprofissionais, o agendamento é realizado via app. Acesso à consulta enviado por link exclusivo em até 7 dias úteis.
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
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Planos e Preços</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {planos.map((p) => (
              <div key={p.nome} className="rounded-2xl border border-[#CECBF6] p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <h3 className="text-xl font-bold text-[#26215C] mb-2">{p.nome}</h3>
                <p className="text-sm text-gray-500 mb-4">{p.cobertura}</p>
                <p className="text-2xl font-extrabold text-[#7F77DD] mb-6">{p.preco}</p>
                <Link href="/contato" className="inline-block bg-[#7F77DD] hover:bg-[#26215C] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm">
                  Contratar
                </Link>
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
          <Link href="/contato" className="inline-block bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
            Fale com um consultor
          </Link>
        </div>
      </section>
    </main>
  )
}
