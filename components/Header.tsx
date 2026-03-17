'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const especialidades = [
  { label: 'Clínica Geral', href: '/servicos#clinica-geral' },
  { label: 'Cardiologia', href: '/servicos#cardiologia' },
  { label: 'Psicologia', href: '/servicos#psicologia' },
  { label: 'Pediatria', href: '/servicos#pediatria' },
  { label: 'Dermatologia', href: '/servicos#dermatologia' },
  { label: 'Nutrição', href: '/servicos#nutricao' },
]

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre-nos', label: 'Sobre Nós' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors hover:text-[#029641] ${
      isActive(href) ? 'text-[#029641]' : 'text-gray-600'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-9 h-9 rounded-full overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="EG Telemedicina"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-base font-bold text-[#062e24]">
              EG Telemedicina
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
            <Link href="/" className={linkClass('/')}>Início</Link>

            {/* Serviços dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#029641] ${
                  isActive('/servicos') ? 'text-[#029641]' : 'text-gray-600'
                }`}
              >
                Serviços
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50">
                  <Link
                    href="/servicos"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-[#029641] hover:bg-[#f0fdf4] transition-colors"
                  >
                    Ver todas
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {especialidades.map((e) => (
                    <Link
                      key={e.href}
                      href={e.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-[#029641] hover:bg-[#f0fdf4] transition-colors"
                    >
                      {e.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/sobre-nos" className={linkClass('/sobre-nos')}>Sobre Nós</Link>
            <Link href="/contato" className={linkClass('/contato')}>Contato</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contato"
              className="text-sm font-semibold text-[#062e24] border border-gray-300 hover:border-[#029641] hover:text-[#029641] px-4 py-2 rounded-full transition-colors"
            >
              Fale Conosco
            </Link>
            <Link
              href="/contato"
              className="text-sm font-semibold text-white bg-[#029641] hover:bg-[#016d2f] px-4 py-2 rounded-full transition-colors"
            >
              Agendar Consulta
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#029641] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              pathname === '/' ? 'text-[#029641] bg-[#f0fdf4]' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Início
          </Link>

          {/* Serviços com sub-itens no mobile */}
          <div>
            <Link
              href="/servicos"
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive('/servicos') ? 'text-[#029641] bg-[#f0fdf4]' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Serviços
            </Link>
            <div className="pl-4 space-y-0.5 mt-0.5">
              {especialidades.map((e) => (
                <Link
                  key={e.href}
                  href={e.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-[#029641] hover:bg-[#f0fdf4] transition-colors"
                >
                  {e.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/sobre-nos"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive('/sobre-nos') ? 'text-[#029641] bg-[#f0fdf4]' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Sobre Nós
          </Link>
          <Link
            href="/contato"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive('/contato') ? 'text-[#029641] bg-[#f0fdf4]' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Contato
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/contato"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-sm font-semibold text-[#062e24] border border-gray-300 px-4 py-2.5 rounded-full"
            >
              Fale Conosco
            </Link>
            <Link
              href="/contato"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-sm font-semibold text-white bg-[#029641] hover:bg-[#016d2f] px-4 py-2.5 rounded-full transition-colors"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
