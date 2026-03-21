'use client'

import { useState } from 'react'

type ActionStatus = 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'

const actions: { label: string; status: ActionStatus; cls: string }[] = [
  { label: 'Confirmar', status: 'CONFIRMED', cls: 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100' },
  { label: 'Concluir', status: 'COMPLETED', cls: 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100' },
  { label: 'Cancelar', status: 'CANCELLED', cls: 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100' },
]

export default function AppointmentActions({
  appointmentId,
  currentStatus,
}: {
  appointmentId: string
  currentStatus: string
}) {
  const [loading, setLoading] = useState<string | null>(null)
  const [status, setStatus] = useState(currentStatus)

  const handleAction = async (newStatus: ActionStatus) => {
    setLoading(newStatus)
    try {
      const res = await fetch(`/api/admin/appointments/${appointmentId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        setStatus(newStatus)
      }
    } finally {
      setLoading(null)
    }
  }

  if (status === 'COMPLETED' || status === 'CANCELLED') {
    return <span className="text-xs text-gray-400 italic">Finalizada</span>
  }

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {actions
        .filter((a) => a.status !== status)
        .map((a) => (
          <button
            key={a.status}
            onClick={() => handleAction(a.status)}
            disabled={loading !== null}
            className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors disabled:opacity-50 ${a.cls}`}
          >
            {loading === a.status ? '...' : a.label}
          </button>
        ))}
    </div>
  )
}
