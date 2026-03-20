import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projeto TEA | EG Telemedicina',
  description: 'Acompanhamento multidisciplinar especializado em Transtorno do Espectro Autista. Psicologia, fonoaudiologia, fisioterapia e neuropediatria online.',
}

const diferenciais = [
  'Atendimento 100% digital e integrado',
  'Equipe multidisciplinar especializada em TEA',
  'Autoagendamento facilitado via plataforma',
  'Prontuário eletrônico com histórico completo',
  'Monitoramento contínuo e relatórios mensais',
  'Continuidade de atendimento',
]

const fluxo = [
  { step: '1', title: 'Cadastro', desc: 'Paciente cadastrado automaticamente na plataforma após contratação' },
  { step: '2', title: 'Avaliação Inicial', desc: 'Triagem com Clínico Geral e direcionamento para especialistas' },
  { step: '3', title: 'Encaminhamento', desc: 'Psiquiatria Pediátrica, Neuropediatria, Psicologia, Fonoaudiologia e/ou Fisioterapia' },
  { step: '4', title: 'Acompanhamento', desc: 'Sessões conforme plano contratado, com mesmos especialistas para continuidade' },
  { step: '5', title: 'Relatório', desc: 'Relatório mensal com indicadores de desenvolvimento e recomendações clínicas' },
]

const beneficiosFamilia = [
  'Atendimento especializado de qualidade sem deslocamento',
  'Equipe multidisciplinar com continuidade — mesmos profissionais',
  'Relatório mensal claro sobre a evolução da criança',
  'Custo significativamente menor que serviços presenciais equivalentes',
  'Suporte ativo à família durante todo o processo',
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#26215C] via-[#3D3580] to-[#7F77DD] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm">
            Protocolo 04
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Projeto TEA
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto mb-4">
            Transtorno do Espectro Autista &middot; Acompanhamento Multidisciplinar
          </p>
          <p className="text-base text-purple-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Avaliação, diagnóstico e acompanhamento estruturado para crianças com suspeita ou diagnóstico de TEA — garantindo desenvolvimento cognitivo, emocional e motor com suporte à família.
          </p>
          <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
            Iniciar acompanhamento
          </Link>
        </div>
        <div className="mt-16 -mb-1">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-white">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Diferenciais do Projeto</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {diferenciais.map((d) => (
              <div key={d} className="flex items-start gap-3 p-5 rounded-xl border border-[#CECBF6]/50 bg-[#EEEDFE]/20">
                <svg className="h-5 w-5 text-[#7F77DD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fluxo */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Como Funciona</h2>
          <div className="space-y-4">
            {fluxo.map((f) => (
              <div key={f.step} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
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

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Benefícios para a Família</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {beneficiosFamilia.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-[#EEEDFE]/30 rounded-xl p-5 border border-[#CECBF6]/50">
                <svg className="h-5 w-5 text-[#7F77DD] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#7F77DD] to-[#26215C]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Cuidado especializado para quem mais importa</h2>
          <p className="text-purple-100 mb-8">Equipe multidisciplinar dedicada ao desenvolvimento da sua criança, sem deslocamento e com suporte contínuo.</p>
          <Link href="/contato" className="inline-block bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200">
            Iniciar acompanhamento
          </Link>
        </div>
      </section>
    </main>
  )
}
