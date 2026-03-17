'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const especialidades = [
  { label: 'Todas', href: '/especialidades' },
  { label: 'Clínica Geral', href: '/especialidades#clinica-geral' },
  { label: 'Cardiologia', href: '/especialidades#cardiologia' },
  { label: 'Psicologia', href: '/especialidades#psicologia' },
  { label: 'Pediatria', href: '/especialidades#pediatria' },
  { label: 'Dermatologia', href: '/especialidades#dermatologia' },
  { label: 'Nutrição', href: '/especialidades#nutricao' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Para Pacientes', href: '/para-pacientes' },
  { label: 'Empresas', href: '/empresas' },
  { label: 'Como Funciona', href: '/como-funciona' },
  { label: 'Planos', href: '/planos' },
  { label: 'Sobre', href: '/sobre-nos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [specOpen, setSpecOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.jpeg" alt="EG Telemedicina" width={40} height={40} className="rounded-full h-10 w-10 object-cover" priority />
          <span className="font-bold text-[#062e24] text-base hidden sm:block">EG Telemedicina</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#029641] ${isActive('/') ? 'text-[#029641]' : 'text-gray-500'}`}
          >
            Home
          </Link>

          {/* Especialidades dropdown — hover */}
          <div className="relative group">
            <button className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#029641] ${isActive('/especialidades') ? 'text-[#029641]' : 'text-gray-500'}`}>
              Especialidades
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full hidden min-w-[180px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg group-hover:block z-50">
              {especialidades.map((e) => (
                <Link
                  key={e.href}
                  href={e.href}
                  className="block rounded-md px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-[#f0fdf4] hover:text-[#029641]"
                >
                  {e.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#029641] ${isActive(l.href) ? 'text-[#029641]' : 'text-gray-500'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <Link
            href="/para-pacientes"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-[#029641] hover:text-[#029641]"
          >
            Quero ser paciente
          </Link>
          <Link
            href="/contato"
            className="rounded-full bg-[#029641] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#016d2f]"
          >
            Agendar consulta
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-1 text-gray-600 hover:text-[#029641]" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
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

            <button
              onClick={() => setSpecOpen(!specOpen)}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Especialidades
              <svg className={`h-4 w-4 transition-transform ${specOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {specOpen && especialidades.map((e) => (
              <Link key={e.href} href={e.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 pl-6 text-sm text-gray-500 hover:bg-gray-50">
                {e.label}
              </Link>
            ))}

            {navLinks.slice(1).map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Link href="/para-pacientes" onClick={() => setMobileOpen(false)} className="block text-center rounded-full border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700">
              Quero ser paciente
            </Link>
            <Link href="/contato" onClick={() => setMobileOpen(false)} className="block text-center rounded-full bg-[#029641] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#016d2f]">
              Agendar consulta
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
