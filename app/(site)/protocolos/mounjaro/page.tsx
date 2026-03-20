import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Programa Mounjaro | EG Telemedicina',
  description: 'Emagrecimento clínico multidisciplinar com acompanhamento médico, nutricional e psicológico para resultados sustentáveis.',
}

const fluxo = [
  { step: '1', title: 'Cadastro', desc: 'Após contratação, o paciente é cadastrado automaticamente na plataforma' },
  { step: '2', title: 'Consulta Inicial', desc: 'Avaliação clínica com médico, definição de dosagem e emissão de receita' },
  { step: '3', title: 'Nutricionista', desc: 'Plano alimentar personalizado e monitoramento nutricional contínuo' },
  { step: '4', title: 'Psicólogo', desc: 'Sessões voltadas para comportamento alimentar, motivação e saúde emocional' },
  { step: '5', title: 'Monitoramento', desc: 'Controle de prescrição, evolução e renovações durante todo o período' },
]

const diferenciais = [
  'Prevenção do efeito rebote — mudança real de comportamento alimentar',
  'Trabalho dos aspectos emocionais vinculados à alimentação',
  'Reeducação nutricional progressiva e sustentável',
  'Maior constância no processo — reduzindo abandono',
  'Resultados clínicos superiores e duradouros',
]

const sla = [
  { indicador: 'Agendamento da consulta inicial', meta: 'Até 48h após cadastro' },
  { indicador: 'Emissão de receita após consulta', meta: 'Até 2h' },
  { indicador: 'Disponibilidade de agendamento nutricional', meta: 'Até 7 dias' },
  { indicador: 'Disponibilidade de agendamento psicológico', meta: 'Até 7 dias' },
  { indicador: 'Renovação de receita', meta: 'Até 24h após solicitação' },
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm">
            Protocolo 03
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Programa Mounjaro
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-4">
            Emagrecimento Clínico &middot; Multidisciplinar
          </p>
          <p className="text-base text-purple-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Tratamento médico estruturado para emagrecimento sustentável com acompanhamento multidisciplinar completo — médico, nutricional e psicológico.
          </p>
          <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
            Iniciar programa
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
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Como Funciona</h2>
          <div className="space-y-4">
            {fluxo.map((f) => (
              <div key={f.step} className="flex items-start gap-4 p-5 rounded-xl border border-[#CECBF6]/50 bg-[#EEEDFE]/20">
                <span className="w-8 h-8 rounded-full bg-[#7F77DD] text-white text-sm font-bold flex items-center justify-center shrink-0">{f.step}</span>
                <div>
                  <h3 className="font-bold text-[#26215C] mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-3 text-center">Estratégia Clínica</h2>
          <p className="text-center text-gray-500 mb-8">O programa vai além da medicação. A abordagem multidisciplinar é o diferencial.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {diferenciais.map((d) => (
              <div key={d} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
                <svg className="h-5 w-5 text-[#7F77DD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Níveis de Serviço</h2>
          <div className="bg-[#EEEDFE]/30 rounded-2xl overflow-hidden shadow-sm border border-[#CECBF6]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#7F77DD]">
                  <th className="text-left py-3 px-6 font-semibold text-[#26215C]">Indicador</th>
                  <th className="text-right py-3 px-6 font-semibold text-[#26215C]">Meta</th>
                </tr>
              </thead>
              <tbody>
                {sla.map((s) => (
                  <tr key={s.indicador} className="border-b border-gray-100 bg-white">
                    <td className="py-3 px-6 text-gray-600">{s.indicador}</td>
                    <td className="py-3 px-6 text-right font-semibold text-[#7F77DD]">{s.meta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#7F77DD] to-[#26215C]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Comece sua transformação com acompanhamento profissional</h2>
          <p className="text-purple-100 mb-8">Resultados superiores com suporte médico, nutricional e psicológico integrado.</p>
          <Link href="/contato" className="inline-block bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
            Iniciar programa
          </Link>
        </div>
      </section>
    </main>
  )
}
