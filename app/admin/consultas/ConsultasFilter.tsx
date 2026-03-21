'use client'

import { useRouter } from 'next/navigation'

const FILTERS = [
  { value: 'ALL', label: 'Todas' },
  { value: 'SCHEDULED', label: 'Agendada' },
  { value: 'CONFIRMED', label: 'Confirmada' },
  { value: 'COMPLETED', label: 'Concluida' },
  { value: 'CANCELLED', label: 'Cancelada' },
]

export default function ConsultasFilter({ currentStatus }: { currentStatus: string }) {
  const router = useRouter()

  const handleChange = (value: string) => {
    const url = value === 'ALL' ? '/admin/consultas' : `/admin/consultas?status=${value}`
    router.push(url)
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => handleChange(f.value)}
          className={`text-sm px-4 py-2 rounded-xl font-medium transition-colors ${
            (currentStatus ?? 'ALL') === f.value
              ? 'bg-[#7F77DD] text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
