import { redirect } from 'next/navigation'
import { getPatientSession } from '@/lib/auth'
import Link from 'next/link'

export const metadata = {
  title: 'Plano ativado | EG Telemedicina',
}

export default async function AssinaSucessoPage() {
  const session = await getPatientSession()
  if (!session) redirect('/login')

  return (
    <div className="max-w-lg mx-auto space-y-8 py-8">
      {/* Celebration header */}
      <div className="text-center space-y-3">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-[#26215C]">Plano ativado com sucesso!</h1>
        <p className="text-gray-500">
          Bem-vindo ao EG Telemedicina. Você agora tem acesso completo.
        </p>
      </div>

      {/* Benefits card */}
      <div className="bg-[#EEEDFE] rounded-2xl border border-[#CECBF6] p-6 space-y-3">
        <h2 className="text-base font-semibold text-[#26215C]">Você agora tem acesso a:</h2>
        <ul className="space-y-3">
          {[
            'Consultas com clínico geral',
            '+30 especialidades disponíveis',
            'Receitas e atestados digitais',
            'Atendimento sem carência',
            'Agendamento online 24 horas',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-[#26215C]">
              <div className="w-5 h-5 rounded-full bg-[#7F77DD] flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTAs */}
      <div className="space-y-3">
        <Link
          href="/plataforma/agendar"
          className="flex items-center justify-center gap-2 w-full bg-[#7F77DD] text-white rounded-xl py-3.5 text-sm font-bold hover:bg-[#26215C] transition-colors"
        >
          Agendar minha primeira consulta
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/plataforma/medicos"
          className="flex items-center justify-center gap-2 w-full bg-white border-2 border-[#7F77DD] text-[#7F77DD] rounded-xl py-3.5 text-sm font-bold hover:bg-[#EEEDFE] transition-colors"
        >
          Explorar médicos
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Footer note */}
      <p className="text-center text-xs text-gray-400">
        Dúvidas? Fale conosco pelo WhatsApp:{' '}
        <a
          href="https://wa.me/5547991583876"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline font-medium"
        >
          (47) 99158-3876
        </a>
      </p>
    </div>
  )
}
