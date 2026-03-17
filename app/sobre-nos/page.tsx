import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nós | EG Telemedicina',
  description:
    'Conheça a EG Telemedicina — nossa história, missão, visão e os especialistas que cuidam da sua saúde.',
}

const mvv = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Missão',
    description:
      'Proporcionar saúde de excelência através de soluções digitais acessíveis, seguras e humanizadas, eliminando as barreiras geográficas no acesso ao cuidado médico.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Visão',
    description:
      'Ser referência nacional em telemedicina pela inovação, ética e satisfação do paciente, tornando a saúde de qualidade acessível a todos os brasileiros.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Valores',
    description:
      'Ética médica, inovação constante, transparência, empatia e bem-estar. Esses pilares guiam cada atendimento e decisão dentro da nossa plataforma.',
  },
]

const highlights = [
  { icon: '🔒', text: 'Segurança e conformidade com LGPD' },
  { icon: '👨‍⚕️', text: 'Corpo clínico rigorosamente selecionado' },
  { icon: '🏥', text: 'Múltiplas especialidades médicas' },
  { icon: '💻', text: 'Plataforma intuitiva e segura' },
]

const team = [
  { name: 'Dr. João Silva', specialty: 'Cardiologia', crm: 'CRM 12345-SP' },
  { name: 'Dra. Maria Santos', specialty: 'Pediatria', crm: 'CRM 67890-RJ' },
  { name: 'Dr. Lucas Oliveira', specialty: 'Clínica Geral', crm: 'CRM 11223-MG' },
  { name: 'Dra. Carla Souza', specialty: 'Dermatologia', crm: 'CRM 44556-SC' },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .filter((_, i) => i === 1 || i === 2)
    .map((n) => n[0])
    .join('')
}

export default function SobreNosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#062e24] to-[#029641] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[#10b981] text-sm font-semibold uppercase tracking-widest mb-4">
              Nossa História
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Transformando o acesso à saúde através da tecnologia
            </h1>
            <p className="text-green-100 text-lg leading-relaxed">
              Fundada com a missão de eliminar as barreiras geográficas no acesso à saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#062e24] mb-6">
                Mais de uma década transformando vidas
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A EG Telemedicina foi fundada com a missão de eliminar as barreiras geográficas no acesso à saúde. Com mais de 10 anos de experiência, construímos uma plataforma robusta e humanizada que conecta pacientes a especialistas qualificados em todo o Brasil.
                </p>
                <p>
                  Acreditamos que todo brasileiro merece acesso a saúde de qualidade, independente de onde mora. Por isso, desenvolvemos soluções tecnológicas que tornam as consultas médicas mais acessíveis, rápidas e seguras.
                </p>
                <p>
                  Nossa plataforma é regulamentada pelo CFM e opera em total conformidade com a LGPD, garantindo privacidade e segurança para todos os nossos usuários.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="bg-[#f0fdf4] rounded-2xl p-6 border border-green-100"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="text-sm font-semibold text-[#062e24] leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#062e24] mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Os pilares que guiam cada decisão e cada atendimento na EG Telemedicina.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mvv.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#f0fdf4] text-[#029641] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#029641] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#062e24] mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#062e24] mb-4">
              Nossa Equipe Médica
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Profissionais experientes, certificados e comprometidos com o seu bem-estar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#029641] to-[#10b981] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg shadow-[#029641]/20 group-hover:shadow-xl group-hover:shadow-[#029641]/30 transition-all duration-300">
                  {getInitials(member.name)}
                </div>
                <h3 className="font-bold text-[#062e24] mb-1">{member.name}</h3>
                <p className="text-[#029641] text-sm font-medium mb-1">{member.specialty}</p>
                <p className="text-xs text-gray-400">{member.crm}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f0fdf4] border-t border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#062e24] mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-gray-500 mb-8">
            Conheça nossos serviços e agende sua primeira consulta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 bg-[#029641] hover:bg-[#016d2f] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#029641]/25"
            >
              Ver Serviços
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 border-2 border-[#029641] text-[#029641] hover:bg-[#029641] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
