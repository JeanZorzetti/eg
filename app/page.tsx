import Link from 'next/link'

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.867V15.1a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Consultas Online',
    description: 'Videoconsultas em HD com privacidade médica garantida. Atenda-se no conforto da sua casa.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Especialistas Qualificados',
    description: 'Rede de médicos experientes e certificados. Corpo clínico rigorosamente selecionado.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Atendimento 24/7',
    description: 'Suporte de emergência disponível a qualquer hora. Saúde sem fronteiras de horário.',
  },
]

const steps = [
  { number: '01', title: 'Cadastre-se', description: 'Crie sua conta em minutos com seus dados básicos.' },
  { number: '02', title: 'Escolha o Médico', description: 'Selecione o especialista ideal para sua necessidade.' },
  { number: '03', title: 'Realize a Consulta', description: 'Videoconsulta segura, privada e de alta qualidade.' },
  { number: '04', title: 'Receitas Digitais', description: 'Receba prescrições digitalmente com validade nacional.' },
]

const testimonials = [
  {
    name: 'Maria Silva',
    specialty: 'Paciente de Pediatria',
    text: 'Atendimento incrível! O médico respondeu em minutos e meu filho foi atendido sem sair de casa.',
    initials: 'MS',
  },
  {
    name: 'Ricardo Mendes',
    specialty: 'Paciente de Clínica Geral',
    text: 'A praticidade da receita digital mudou minha vida. Recomendo a todos!',
    initials: 'RM',
  },
  {
    name: 'Ana Paula Costa',
    specialty: 'Paciente de Psicologia',
    text: 'Mesmo online, o atendimento foi muito humano e cuidadoso.',
    initials: 'AC',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section — sofisticado + litorâneo */}
      <section className="relative bg-[#26215C] text-white overflow-hidden">
        {/* Fundo com textura de ondas sutis */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Gradiente direcional */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#26215C] via-[#2e2870] to-[#3D3580]" />
          {/* Brilho litorâneo — reflexo de luz no canto superior */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#7F77DD]/20 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#CECBF6]/10 blur-[100px]" />
          {/* Ondas decorativas no fundo */}
          <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80 C240 140 480 20 720 80 C960 140 1200 20 1440 80 L1440 180 L0 180 Z" fill="#CECBF6"/>
          </svg>
          <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60 C360 120 720 0 1080 60 C1260 90 1380 40 1440 60 L1440 140 L0 140 Z" fill="#7F77DD"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36 lg:pt-32 lg:pb-44">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-[#CECBF6] text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-white/15 shadow-lg shadow-black/10">
              <span className="w-1.5 h-1.5 bg-[#CECBF6] rounded-full animate-pulse" />
              Médicos disponíveis agora
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-7">
              Saúde de qualidade{' '}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CECBF6] to-[#B8B5CC]">
                onde você estiver
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#B8B5CC] leading-relaxed mb-10 max-w-xl font-light">
              Consultas médicas online com especialistas qualificados. Rápido, seguro e acessível — do litoral ao sertão.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-white text-[#26215C] hover:bg-[#EEEDFE] font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-[#7F77DD]/30 hover:-translate-y-0.5 text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Agendar Consulta
              </Link>
              <Link
                href="/como-funciona"
                className="inline-flex items-center gap-2 border border-white/25 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm text-base"
              >
                Como funciona
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Selos glassmorphism */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🌊', text: 'Atendimento 24h' },
                { icon: '⚕️', text: '+30 especialidades' },
                { icon: '🔒', text: 'Plataforma segura' },
              ].map((s) => (
                <div key={s.text} className="flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/12 rounded-full px-4 py-2 text-sm text-[#CECBF6]">
                  <span>{s.icon}</span>
                  {s.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Onda de transição para a próxima seção */}
        <div className="absolute bottom-0 left-0 w-full -mb-1">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#7F77DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '+10.000', label: 'Pacientes Atendidos' },
              { value: '+50', label: 'Especialistas' },
              { value: '98%', label: 'Satisfação' },
              { value: '24/7', label: 'Disponibilidade' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-extrabold">{stat.value}</div>
                <div className="text-sm text-purple-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26215C] mb-4">
              Por que escolher a EG Telemedicina?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Unimos tecnologia de ponta com atendimento humanizado para cuidar da sua saúde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#EEEDFE] text-[#7F77DD] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7F77DD] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#26215C] mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26215C] mb-4">Como Funciona</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Quatro passos simples para começar a cuidar da sua saúde hoje.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#7F77DD] to-[#CECBF6] opacity-20" />
                )}
                <div className="relative">
                  <div className="w-16 h-16 bg-[#7F77DD] text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-5 shadow-lg shadow-[#7F77DD]/25">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#26215C] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#EEEDFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26215C] mb-4">
              O que dizem nossos pacientes
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Mais de 10.000 pacientes já transformaram sua relação com a saúde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#CECBF6] hover:shadow-md transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#7F77DD]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-6">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7F77DD] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#26215C] text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.specialty}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#7F77DD] to-[#CECBF6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Cuide da sua saúde hoje mesmo
          </h2>
          <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto">
            Agende sua primeira consulta e descubra como a telemedicina pode transformar o seu cuidado com a saúde.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-[#7F77DD] hover:bg-[#EEEDFE] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 text-lg"
          >
            Comece Agora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
