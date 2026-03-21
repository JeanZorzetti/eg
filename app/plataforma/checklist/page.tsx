'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const YEAR = new Date().getFullYear()
const STORAGE_KEY = `eg_checklist_${YEAR}`

interface Specialty {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

const specialties: Specialty[] = [
  {
    id: 'clinico-geral',
    name: 'Clínico Geral',
    description: 'Consulta de rotina e avaliação geral de saúde',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'cardiologista',
    name: 'Cardiologista',
    description: 'Saúde do coração e sistema cardiovascular',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 'dermatologista',
    name: 'Dermatologista',
    description: 'Saúde da pele, cabelo e unhas',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    id: 'oftalmologista',
    name: 'Oftalmologista',
    description: 'Saúde ocular e visão',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: 'dentista',
    name: 'Dentista',
    description: 'Saúde bucal e prevenção odontológica',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'ginecologista-urologista',
    name: 'Ginecologista / Urologista',
    description: 'Saúde reprodutiva e trato urinário',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
]

export default function ChecklistPage() {
  const [completed, setCompleted] = useState<string[]>([])
  const [dismissed, setDismissed] = useState(false)

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setCompleted(JSON.parse(stored))
    } catch {
      // ignore
    }
  }, [])

  const toggleSpecialty = (id: string) => {
    const updated = completed.includes(id)
      ? completed.filter((s) => s !== id)
      : [...completed, id]
    setCompleted(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // ignore
    }
  }

  const progress = completed.length
  const total = specialties.length
  const percentage = Math.round((progress / total) * 100)
  const allDone = progress === total

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#26215C]">Seu Check-up Anual</h1>
        <p className="text-gray-500 text-sm mt-1">
          Mantenha sua saúde em dia com acompanhamento preventivo
        </p>
      </div>

      {/* Progress bar */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-[#26215C]">
            {progress} de {total} consultas realizadas
          </span>
          <span className="text-sm font-bold text-[#7F77DD]">{percentage}%</span>
        </div>
        <div className="w-full h-3 bg-[#EEEDFE] rounded-full overflow-hidden">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-[#7F77DD] to-[#26215C] transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {allDone && (
          <p className="mt-3 text-sm font-semibold text-green-700 text-center">
            Check-up completo! Voce esta cuidando bem da sua saude.
          </p>
        )}
      </div>

      {/* Specialty cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {specialties.map((specialty) => {
          const done = completed.includes(specialty.id)
          return (
            <div
              key={specialty.id}
              className={`bg-white rounded-2xl border p-5 transition-all ${
                done ? 'border-green-200 bg-green-50/40' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    done ? 'bg-green-100 text-green-600' : 'bg-[#EEEDFE] text-[#7F77DD]'
                  }`}
                >
                  {specialty.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-semibold text-[#26215C]">{specialty.name}</p>
                    {done && (
                      <span className="text-green-600 text-xs font-medium flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Realizado
                      </span>
                    )}
                    {!done && (
                      <span className="text-gray-400 text-xs">Pendente</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{specialty.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleSpecialty(specialty.id)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                        done
                          ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          : 'bg-[#EEEDFE] text-[#7F77DD] hover:bg-[#CECBF6]'
                      }`}
                    >
                      {done ? 'Desmarcar' : 'Marcar como realizado'}
                    </button>
                    <Link
                      href="/plataforma/agendar"
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#7F77DD] text-white hover:bg-[#26215C] transition-colors"
                    >
                      Agendar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom banner — only if incomplete */}
      {!allDone && !dismissed && (
        <div className="relative rounded-2xl bg-gradient-to-r from-[#26215C] to-[#7F77DD] p-6 text-white">
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-3 right-4 text-white/60 hover:text-white text-xl leading-none"
            aria-label="Fechar"
          >
            ×
          </button>
          <p className="text-base font-bold mb-1">
            Complete seu check-up anual e cuide da sua saude preventivamente
          </p>
          <p className="text-sm text-white/80 mb-4">
            Voce ja completou {progress} de {total} especialidades. Continue o progresso!
          </p>
          <Link
            href="/plataforma/agendar"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-[#26215C] px-5 py-2.5 text-sm font-semibold hover:bg-[#EEEDFE] transition-colors"
          >
            Agendar consulta →
          </Link>
        </div>
      )}

    </div>
  )
}
