'use client'

import { useState, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

function Modal({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const content = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-[#26215C] mb-1">Como deseja ser atendido?</h2>
        <p className="text-sm text-gray-400 mb-7">Escolha a opção ideal para sua necessidade.</p>

        <div className="space-y-4">
          {/* PA */}
          <Link
            href="/planos"
            onClick={onClose}
            className="flex items-start gap-4 p-5 border-2 border-[#CECBF6] rounded-xl hover:border-[#7F77DD] hover:bg-[#EEEDFE] transition-all group"
          >
            <div className="w-12 h-12 bg-[#EEEDFE] text-[#7F77DD] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#7F77DD] group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#26215C] text-base">Pronto Atendimento (PA)</div>
              <div className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                Atendimento imediato 24h com clínico geral. Ideal para urgências e dúvidas rápidas.
              </div>
              <div className="text-xs text-[#7F77DD] font-semibold mt-2">Ver planos →</div>
            </div>
          </Link>

          {/* Especialista */}
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-start gap-4 p-5 border-2 border-[#CECBF6] rounded-xl hover:border-[#7F77DD] hover:bg-[#EEEDFE] transition-all group"
          >
            <div className="w-12 h-12 bg-[#EEEDFE] text-[#7F77DD] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#7F77DD] group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#26215C] text-base">Agendar com Especialista</div>
              <div className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                Consulta agendada com mais de 30 especialidades. Corpo clínico próprio e qualificado.
              </div>
              <div className="text-xs text-[#7F77DD] font-semibold mt-2">Acessar plataforma →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )

  if (!mounted) return null
  return createPortal(content, document.body)
}

interface AgendarButtonProps {
  children: ReactNode
  className: string
}

export function AgendarButton({ children, className }: AgendarButtonProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  )
}
