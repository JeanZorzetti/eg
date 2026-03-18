'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const especialidades = [
  { label: 'Todas', href: '/especialidades' },
  { label: 'Adulto', href: '/especialidades/adulto' },
  { label: 'Infantil', href: '/especialidades/infantil' },
  { label: 'Terapias', href: '/especialidades/terapias' },
]

// Links visíveis diretamente na nav
const mainLinks = [
  { label: 'Para Pacientes', href: '/para-pacientes' },
  { label: 'Empresas', href: '/empresas' },
]

// Links agrupados no dropdown "Mais"
const moreLinks = [
  { label: 'Como Funciona', href: '/como-funciona' },
  { label: 'Planos', href: '/planos' },
  { label: 'Sobre', href: '/sobre-nos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

const protocolos = [
  { label: 'Telemedicina', href: '/protocolos/telemedicina' },
  { label: 'Programa NR-1', href: '/protocolos/nr1' },
  { label: 'Programa Mounjaro', href: '/protocolos/mounjaro' },
  { label: 'Projeto TEA', href: '/protocolos/tea' },
  { label: 'Entrevista Qualificada', href: '/protocolos/entrevista-qualificada' },
]

const Chevron = ({ className }: { className?: string }) => (
  <svg className={className ?? 'h-3 w-3'} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
  </svg>
)

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [specOpen, setSpecOpen] = useState(false)   // mobile only
  const [moreOpen, setMoreOpen] = useState(false)   // mobile only
  const [protoOpen, setProtoOpen] = useState(false) // mobile only

  const moreRef = useRef<HTMLDivElement>(null)

  // Fecha dropdown "Mais" ao clicar fora
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const linkCls = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#7F77DD] ${
      isActive(href) ? 'text-[#7F77DD]' : 'text-gray-500'
    }`

  const moreActive = moreLinks.some((l) => isActive(l.href))

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="EG Telemedicina"
            width={160}
            height={64}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1">

          {/* Home */}
          <Link href="/" className={linkCls('/')}>Home</Link>

          {/* Especialidades — hover dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#7F77DD] ${isActive('/especialidades') ? 'text-[#7F77DD]' : 'text-gray-500'}`}>
              Especialidades <Chevron />
            </button>
            <div className="absolute left-0 top-full hidden min-w-[180px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg group-hover:block z-50">
              {especialidades.map((e) => (
                <Link key={e.href} href={e.href} className="block rounded-md px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-[#EEEDFE] hover:text-[#7F77DD]">
                  {e.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Links principais */}
          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls(l.href)}>{l.label}</Link>
          ))}

          {/* Protocolos — hover dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#7F77DD] ${isActive('/protocolos') ? 'text-[#7F77DD]' : 'text-gray-500'}`}>
              Protocolos <Chevron />
            </button>
            <div className="absolute left-0 top-full hidden min-w-[220px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg group-hover:block z-50">
              {protocolos.map((p) => (
                <Link key={p.href} href={p.href} className="block rounded-md px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-[#EEEDFE] hover:text-[#7F77DD]">
                  {p.label}
                </Link>
              ))}
              <hr className="my-1 border-gray-100" />
              <a href="/protocolos.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-[#EEEDFE] hover:text-[#7F77DD]">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Baixar PDF completo
              </a>
            </div>
          </div>

          {/* Mais ▾ — click dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#7F77DD] ${moreActive || moreOpen ? 'text-[#7F77DD]' : 'text-gray-500'}`}
            >
              Mais
              <Chevron className={`h-3 w-3 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreOpen && (
              <div className="absolute left-0 top-full mt-1 min-w-[180px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg z-50">
                {moreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMoreOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-[#EEEDFE] hover:text-[#7F77DD] ${isActive(l.href) ? 'text-[#7F77DD] font-medium' : 'text-gray-500'}`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/para-pacientes"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-[#7F77DD] hover:text-[#7F77DD]"
          >
            Quero ser paciente
          </Link>
          <Link
            href="/contato"
            className="rounded-full bg-[#7F77DD] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#26215C]"
          >
            Agendar consulta
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-1 text-gray-600 hover:text-[#7F77DD] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50">Home</Link>

            {/* Especialidades accordion */}
            <button
              onClick={() => setSpecOpen(!specOpen)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Especialidades
              <Chevron className={`h-4 w-4 transition-transform ${specOpen ? 'rotate-180' : ''}`} />
            </button>
            {specOpen && especialidades.map((e) => (
              <Link key={e.href} href={e.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 pl-6 text-sm text-gray-500 hover:bg-gray-50">
                {e.label}
              </Link>
            ))}

            {mainLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50">
                {l.label}
              </Link>
            ))}

            {/* Mais accordion */}
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Mais
              <Chevron className={`h-4 w-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            {moreOpen && moreLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => { setMobileOpen(false); setMoreOpen(false) }} className="rounded-md px-3 py-2 pl-6 text-sm text-gray-500 hover:bg-gray-50">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Protocolos accordion — mobile */}
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setProtoOpen(!protoOpen)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Protocolos
              <Chevron className={`h-4 w-4 transition-transform ${protoOpen ? 'rotate-180' : ''}`} />
            </button>
            {protoOpen && protocolos.map((p) => (
              <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 pl-6 text-sm text-gray-500 hover:bg-gray-50">
                {p.label}
              </Link>
            ))}
            {protoOpen && (
              <a href="/protocolos.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-md px-3 py-2 pl-6 text-sm text-gray-400 hover:bg-gray-50">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Baixar PDF completo
              </a>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Link href="/para-pacientes" onClick={() => setMobileOpen(false)} className="block text-center rounded-full border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700">
              Quero ser paciente
            </Link>
            <Link href="/contato" onClick={() => setMobileOpen(false)} className="block text-center rounded-full bg-[#7F77DD] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#26215C]">
              Agendar consulta
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
