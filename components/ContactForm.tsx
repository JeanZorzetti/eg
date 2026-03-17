'use client'

import { useState } from 'react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('sending')

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))

    setFormState('success')
    setForm({ name: '', email: '', message: '' })
  }

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-[#EEEDFE] rounded-2xl border border-[#CECBF6]">
        <div className="w-16 h-16 bg-[#7F77DD] rounded-full flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#26215C] mb-2">Mensagem enviada!</h3>
        <p className="text-gray-500 mb-6">
          Obrigado pelo contato. Nossa equipe retornará em até 24 horas.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="text-[#7F77DD] hover:text-[#26215C] font-semibold text-sm underline"
        >
          Enviar nova mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[#26215C] mb-1.5">
          Nome completo <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Seu nome completo"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F77DD]/40 focus:border-[#7F77DD] transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#26215C] mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com.br"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F77DD]/40 focus:border-[#7F77DD] transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#26215C] mb-1.5">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Como podemos ajudar você?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F77DD]/40 focus:border-[#7F77DD] transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={formState === 'sending'}
        className="w-full flex items-center justify-center gap-2 bg-[#7F77DD] hover:bg-[#26215C] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#7F77DD]/25"
      >
        {formState === 'sending' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  )
}
