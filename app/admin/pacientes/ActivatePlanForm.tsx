'use client'

import { useState } from 'react'

const PLANS = [
  { value: 'INDIVIDUAL', label: 'Individual — R$44/mês' },
  { value: 'FAMILIAR', label: 'Familiar — R$162/mês' },
  { value: 'FAMILIAR_PRO', label: 'Familiar Pro — R$228/mês' },
  { value: 'EMPRESARIAL', label: 'Empresarial' },
]

export default function ActivatePlanForm({
  userId,
  userName,
}: {
  userId: string
  userName: string
}) {
  const [open, setOpen] = useState(false)
  const [plan, setPlan] = useState('INDIVIDUAL')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, plan }),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? 'Erro ao ativar plano')
        return
      }
      setSuccess(true)
      setTimeout(() => {
        setOpen(false)
        setSuccess(false)
        window.location.reload()
      }, 1500)
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
        className="text-xs bg-[#7F77DD] text-white px-3 py-1.5 rounded-lg hover:bg-[#26215C] transition-colors font-medium"
      >
        Ativar plano
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
            <h3 className="text-base font-bold text-[#26215C] mb-1">Ativar Plano</h3>
            <p className="text-sm text-gray-500 mb-4">
              Paciente: <span className="font-semibold text-gray-800">{userName}</span>
            </p>

            {success ? (
              <div className="text-center py-4">
                <div className="text-green-600 font-semibold">Plano ativado com sucesso!</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Selecione o plano
                  </label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F77DD]"
                  >
                    {PLANS.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                <div className="flex gap-3 pt-1">
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
                    {loading ? 'Ativando...' : 'Confirmar'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
