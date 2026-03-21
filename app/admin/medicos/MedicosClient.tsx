'use client'

import { useRouter } from 'next/navigation'
import DoctorFormModal from './DoctorFormModal'
import DoctorToggle from './DoctorToggle'

type Doctor = {
  id: string
  name: string
  specialty: string
  crm: string
  state: string
  bio: string | null
  rating: number
  reviewCount: number
  available: boolean
}

export default function MedicosClient({ doctors }: { doctors: Doctor[] }) {
  const router = useRouter()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end">
        <DoctorFormModal onCreated={() => router.refresh()} />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-3 text-left font-medium">Nome</th>
                <th className="px-6 py-3 text-left font-medium">Especialidade</th>
                <th className="px-6 py-3 text-left font-medium">CRM/Estado</th>
                <th className="px-6 py-3 text-left font-medium">Nota</th>
                <th className="px-6 py-3 text-left font-medium">Disponivel</th>
              </tr>
            </thead>
            <tbody>
              {doctors.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                    Nenhum medico cadastrado. Clique em "Adicionar Medico" para comecar.
                  </td>
                </tr>
              ) : (
                doctors.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7F77DD] to-[#26215C] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {doc.name.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{doc.name}</div>
                          {doc.bio && (
                            <div className="text-xs text-gray-400 mt-0.5 max-w-xs truncate">{doc.bio}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{doc.specialty}</td>
                    <td className="px-6 py-4 text-gray-500 text-xs font-mono">
                      CRM/{doc.state} {doc.crm}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-amber-400">★</span>
                        <span className="font-semibold text-gray-800">{doc.rating.toFixed(1)}</span>
                        <span className="text-gray-400 text-xs">({doc.reviewCount})</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <DoctorToggle doctorId={doc.id} available={doc.available} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
