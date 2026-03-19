import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Programa NR-1 | EG Telemedicina',
  description: 'Conformidade legal com a NR-1 do MTE. Programa estruturado de saúde mental corporativa com atendimento psicológico, clínico e psiquiátrico via telemedicina.',
}

const fluxo = [
  { step: '1', title: 'Implantação', desc: 'EG configura a plataforma e disponibiliza link exclusivo para o RH' },
  { step: '2', title: 'Acesso', desc: 'Colaborador acessa o portal e agenda diretamente — sem intermediação do RH' },
  { step: '3', title: 'Triagem', desc: 'Psicólogo realiza acolhimento e identifica a necessidade assistencial' },
  { step: '4', title: 'Encaminhamento', desc: 'Direcionamento automático conforme nível: orientativo, clínico ou psiquiátrico' },
  { step: '5', title: 'Acompanhamento', desc: 'Acompanhamento contínuo dentro da plataforma' },
  { step: '6', title: 'Relatório', desc: 'Relatório mensal enviado ao RH com indicadores anonimizados (LGPD)' },
]

const beneficiosEmpresa = [
  'Conformidade legal com a NR-1 — evita multas e passivos trabalhistas',
  'Redução de afastamentos por causas psicossociais',
  'Menor custo comparado ao plano de saúde convencional',
  'Relatório mensal com evidência documental para auditorias',
  'Implantação em até 5 dias úteis, sem infraestrutura física',
  'Programa personalizado à empresa',
]

const beneficiosColab = [
  'Acesso confidencial e sem estigma — agenda diretamente pela plataforma',
  'Suporte psicológico de qualidade',
  'Continuidade no cuidado',
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
          <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
            Solicitar proposta
          </Link>
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
                <span className="inline-flex w-8 h-8 rounded-full bg-[#7F77DD] text-white text-sm font-bold items-center justify-center mb-3">{f.step}</span>
                <h3 className="font-bold text-[#26215C] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
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
          <p className="text-purple-100 mb-8">Implantação em até 5 dias úteis. Sem infraestrutura física.</p>
          <Link href="/contato" className="inline-block bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
            Solicitar proposta
          </Link>
        </div>
      </section>
    </main>
  )
}
