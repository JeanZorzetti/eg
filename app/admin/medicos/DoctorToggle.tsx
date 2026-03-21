'use client'

import { useState } from 'react'

export default function DoctorToggle({
  doctorId,
  available,
}: {
  doctorId: string
  available: boolean
}) {
  const [current, setCurrent] = useState(available)
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/doctors/${doctorId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ available: !current }),
      })
      if (res.ok) {
        setCurrent((v) => !v)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      title={current ? 'Desativar' : 'Ativar'}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none disabled:opacity-50 ${
        current ? 'bg-[#7F77DD]' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          current ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
