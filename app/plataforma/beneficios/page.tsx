'use client'

import { useState, useEffect } from 'react'

const previewCards = [
  {
    icon: '💊',
    title: 'Farmacias parceiras',
    description: 'ate 30% de desconto',
  },
  {
    icon: '🔬',
    title: 'Laboratorios',
    description: 'exames com preco especial',
  },
  {
    icon: '🏃',
    title: 'Academias',
    description: 'condicoes exclusivas',
  },
  {
    icon: '🦷',
    title: 'Odontologia',
    description: 'planos odontologicos parceiros',
  },
]

const STORAGE_KEY = 'eg_beneficios_email'

export default function BeneficiosPage() {
  const [email, setEmail] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setEmail(stored)
        setSaved(true)
      }
    } catch {
      // ignore
    }
  }, [])

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    try {
      localStorage.setItem(STORAGE_KEY, email.trim())
    } catch {
      // ignore
    }
    setSaved(true)
  }

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div className="text-center py-4">
        <div className="w-16 h-16 bg-[#EEEDFE] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#26215C]">Clube de Beneficios EG</h1>
        <div className="inline-flex items-center gap-1.5 bg-[#EEEDFE] text-[#7F77DD] text-xs font-semibold px-3 py-1.5 rounded-full mt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7F77DD] animate-pulse" />
          Em breve
        </div>
        <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
          Descontos exclusivos para assinantes EG em farmacias, laboratorios e muito mais.
        </p>
      </div>

      {/* Preview cards — greyed out */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {previewCards.map((card) => (
          <div
            key={card.title}
            className="relative bg-white rounded-2xl border border-gray-200 p-5 overflow-hidden opacity-60"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{card.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-700">{card.title}</p>
                <p className="text-xs text-gray-400">{card.description}</p>
              </div>
            </div>
            {/* Coming soon overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[1px]">
              <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200">
                Em breve
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Email capture */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-base font-semibold text-[#26215C] mb-1">
          Seja notificado quando lancar
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Voce sera o primeiro a saber quando o Clube de Beneficios estiver disponivel.
        </p>
        {saved ? (
          <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>{email}</strong> — voce sera avisado no lancamento!
            </span>
          </div>
        ) : (
          <form onSubmit={handleNotify} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F77DD] focus:border-transparent"
            />
            <button
              type="submit"
              className="shrink-0 px-5 py-3 rounded-xl bg-[#7F77DD] text-white text-sm font-semibold hover:bg-[#26215C] transition-colors"
            >
              Me avise
            </button>
          </form>
        )}
      </div>

      {/* Reassurance note */}
      <p className="text-xs text-gray-400 text-center">
        O Clube de Beneficios sera exclusivo para assinantes ativos da EG Telemedicina.
      </p>
    </div>
  )
}
