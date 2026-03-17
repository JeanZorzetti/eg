import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projeto TEA | EG Telemedicina',
  description: 'Acompanhamento multidisciplinar especializado em Transtorno do Espectro Autista. Psicologia, fonoaudiologia, fisioterapia e neuropediatria online.',
}

const planos = [
  {
    nome: 'Mensal',
    subtitulo: 'Manutenção',
    atendimentos: '5 atend./mês',
    indicacao: 'Monitoramento contínuo e ajustes terapêuticos periódicos',
    composicao: ['1 Clínico Geral', '1 Psiquiatra/Neuropediatra', '1 Psicologia', '1 Fonoaudiologia', '1 Fisioterapia'],
    preco: 'R$ 1.119,00/mês',
  },
  {
    nome: 'Quinzenal',
    subtitulo: 'Intermediário',
    atendimentos: '8 atend./mês',
    indicacao: 'Pacientes em fase de intervenção estruturada',
    composicao: ['1 Clínico Geral', '1 Psiquiatra/Neuropediatra', '2 Psicologia', '2 Fonoaudiologia', '2 Fisioterapia'],
    preco: 'R$ 1.644,00/mês',
    destaque: true,
  },
  {
    nome: 'Semanal',
    subtitulo: 'Intensivo',
    atendimentos: '14 atend./mês',
    indicacao: 'Diagnóstico recente ou necessidade de intervenção intensiva',
    composicao: ['1 Clínico Geral', '1 Psiquiatra/Neuropediatra', '4 Psicologia', '4 Fonoaudiologia', '4 Fisioterapia'],
    preco: 'R$ 2.694,00/mês',
  },
]

const diferenciais = [
  'Atendimento 100% digital e integrado',
  'Equipe multidisciplinar especializada em TEA',
  'Autoagendamento facilitado via plataforma',
  'Prontuário eletrônico com histórico completo',
  'Monitoramento contínuo e relatórios mensais',
  'Continuidade com os mesmos profissionais',
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
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato" className="bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl">
              Iniciar acompanhamento
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

      {/* Planos */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-3 text-center">Planos de Acompanhamento</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Ciclos de 2, 4 ou 6 meses. Inclui toda equipe multidisciplinar.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {planos.map((p) => (
              <div key={p.nome} className={`rounded-2xl border p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${p.destaque ? 'border-[#7F77DD] bg-[#EEEDFE]/30 ring-2 ring-[#7F77DD]' : 'border-[#CECBF6]'}`}>
                {p.destaque && <span className="inline-block mb-3 text-xs font-bold px-3 py-1 rounded-full bg-[#7F77DD] text-white">Recomendado</span>}
                <h3 className="text-xl font-bold text-[#26215C] mb-0.5">{p.nome}</h3>
                <p className="text-sm font-medium text-[#7F77DD] mb-1">{p.subtitulo}</p>
                <p className="text-xs text-gray-400 mb-4">{p.atendimentos}</p>
                <p className="text-2xl font-extrabold text-[#7F77DD] mb-4">{p.preco}</p>
                <div className="bg-[#EEEDFE] rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-[#26215C] mb-1">Indicado para:</p>
                  <p className="text-xs text-gray-600">{p.indicacao}</p>
                </div>
                <ul className="space-y-1.5 mb-6">
                  {p.composicao.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="h-3.5 w-3.5 text-[#7F77DD] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
                <Link href="/contato" className="inline-block bg-[#7F77DD] hover:bg-[#26215C] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm w-full text-center">
                  Contratar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-[#EEEDFE]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#26215C] mb-8 text-center">Benefícios para a Família</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {beneficiosFamilia.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
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
