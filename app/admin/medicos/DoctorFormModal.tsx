'use client'

import { useState } from 'react'

type DoctorFormData = {
  name: string
  specialty: string
  crm: string
  state: string
  bio: string
  rating: string
}

const INITIAL: DoctorFormData = {
  name: '',
  specialty: '',
  crm: '',
  state: '',
  bio: '',
  rating: '5.0',
}

export default function DoctorFormModal({ onCreated }: { onCreated: () => void }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<DoctorFormData>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/doctors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Erro ao criar médico')
        return
      }
      setForm(INITIAL)
      setOpen(false)
      onCreated()
    } catch {
      setError('Erro de conexão')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#7F77DD] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#26215C] transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Adicionar Medico
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-[#26215C]">Adicionar Medico</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name', label: 'Nome completo', placeholder: 'Dr. João Silva', required: true },
                { name: 'specialty', label: 'Especialidade', placeholder: 'Cardiologista', required: true },
                { name: 'crm', label: 'CRM', placeholder: '123456', required: true },
                { name: 'state', label: 'Estado (UF)', placeholder: 'SP', required: true },
                { name: 'rating', label: 'Nota (0-5)', placeholder: '5.0', required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    {field.label}{field.required && ' *'}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={form[field.name as keyof DoctorFormData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F77DD]"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Bio</label>
                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  placeholder="Especialista em..."
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F77DD] resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#7F77DD] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#26215C] transition-colors disabled:opacity-60"
                >
                  {loading ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
