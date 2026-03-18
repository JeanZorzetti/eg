import Link from 'next/link'
import Image from 'next/image'

const Footer = () => (
  <footer className="border-t border-gray-800 bg-[#26215C] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {/* Col 1 — Brand */}
        <div>
          <div className="mb-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="EG Telemedicina" width={40} height={40} className="rounded-full h-10 w-10 object-cover" />
              <span className="font-bold text-white text-base">EG Telemedicina</span>
            </Link>
          </div>
          <p className="text-sm text-white/70">Saúde acessível para todos. Tecnologia que conecta pessoas a médicos.</p>
        </div>

        {/* Col 2 — Navegação */}
        <div>
          <h4 className="mb-3 font-semibold">Navegação</h4>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/para-pacientes" className="hover:text-white transition-colors">Para Pacientes</Link>
            <Link href="/empresas" className="hover:text-white transition-colors">Empresas</Link>
            <Link href="/planos" className="hover:text-white transition-colors">Planos</Link>
            <Link href="/sobre-nos" className="hover:text-white transition-colors">Sobre</Link>
          </div>
        </div>

        {/* Col 3 — Especialidades */}
        <div>
          <h4 className="mb-3 font-semibold">Especialidades</h4>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <Link href="/especialidades#clinica-geral" className="hover:text-white transition-colors">Clínica Geral</Link>
            <Link href="/especialidades#cardiologia" className="hover:text-white transition-colors">Cardiologia</Link>
            <Link href="/especialidades#psicologia" className="hover:text-white transition-colors">Psicologia</Link>
            <Link href="/especialidades#pediatria" className="hover:text-white transition-colors">Pediatria</Link>
            <Link href="/especialidades#dermatologia" className="hover:text-white transition-colors">Dermatologia</Link>
            <Link href="/especialidades#nutricao" className="hover:text-white transition-colors">Nutrição</Link>
          </div>
        </div>

        {/* Col 4 — Contato */}
        <div>
          <h4 className="mb-3 font-semibold">Contato</h4>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contato@egtelemedicina24h.com
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (47) 99158-3876
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              São Paulo, SP
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 md:flex-row">
        <p className="flex items-center gap-1 text-sm text-white/60">
          © {new Date().getFullYear()} EG Telemedicina. Feito com
          <svg className="h-3 w-3 text-red-400 inline" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.79 3.359 2 5.992 2c1.808 0 3.383.9 4.559 2.289C11.771 2.9 13.388 2 15.008 2 17.64 2 20 3.79 20 7.191c0 4.105-5.37 8.863-11 14.402H12z" />
          </svg>
          para democratizar a saúde.
        </p>
        <div className="flex gap-4 text-sm text-white/60 items-center">
          <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
          <Link href="/login" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            Admin
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
