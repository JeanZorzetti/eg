'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import StatusBadge from '@/components/plataforma/StatusBadge'

type Appointment = {
  id: string
  specialty: string
  doctorName: string | null
  dateTime: string
  status: string
  notes: string | null
}

type SubscriptionStatus = {
  isSubscriber: boolean
  plan: string | null
}

export default function ConsultasPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [cancelling, setCancelling] = useState<string | null>(null)
  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionStatus | null>(null)

  const load = async () => {
    const [apptRes, subRes] = await Promise.all([
      fetch('/api/plataforma/appointments'),
      fetch('/api/plataforma/subscription-status'),
    ])
    if (apptRes.ok) setAppointments(await apptRes.json())
    if (subRes.ok) setSubscriptionStatus(await subRes.json())
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleCancel = async (id: string) => {
    if (!confirm('Tem certeza que deseja cancelar esta consulta?')) return
    setCancelling(id)
    const res = await fetch(`/api/plataforma/appointments/${id}`, { method: 'PATCH' })
    if (res.ok) await load()
    setCancelling(null)
  }

  const fmtDate = (s: string) =>
    new Date(s).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
  const fmtTime = (s: string) =>
    new Date(s).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="w-6 h-6 animate-spin text-[#7F77DD]" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#26215C]">Minhas Consultas</h1>

      {/* No subscription CTA */}
      {!subscriptionStatus?.isSubscriber && (
        <div className="bg-[#EEEDFE] border border-[#CECBF6] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#7F77DD] flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-[#26215C]">Você não tem um plano ativo</p>
            <p className="text-sm text-gray-600 mt-0.5">
              Assine um plano para agendar consultas com +30 especialistas, sem carência.
            </p>
          </div>
          <Link
            href="/plataforma/assinar"
            className="shrink-0 bg-[#7F77DD] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#26215C] transition-colors whitespace-nowrap"
          >
            Assinar agora
          </Link>
        </div>
      )}

      {appointments.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500 mb-3">Você ainda não tem consultas</p>
          {subscriptionStatus?.isSubscriber ? (
            <Link href="/plataforma/agendar" className="text-[#7F77DD] font-semibold hover:underline">
              Agendar primeira consulta
            </Link>
          ) : (
            <Link href="/plataforma/assinar" className="text-[#7F77DD] font-semibold hover:underline">
              Assine um plano para começar
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {appointments.map((appt) => (
            <div key={appt.id} className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EEEDFE] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{appt.specialty}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {fmtDate(appt.dateTime)} às {fmtTime(appt.dateTime)}
                    </p>
                    {appt.doctorName && (
                      <p className="text-xs text-gray-400 mt-0.5">Dr(a). {appt.doctorName}</p>
                    )}
                    {appt.notes && (
                      <p className="text-xs text-gray-400 mt-1 italic">{appt.notes}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:shrink-0">
                  <StatusBadge status={appt.status} />
                  {['SCHEDULED', 'CONFIRMED'].includes(appt.status) && (
                    <button
                      onClick={() => handleCancel(appt.id)}
                      disabled={cancelling === appt.id}
                      className="text-xs text-red-500 hover:text-red-700 font-medium disabled:opacity-50"
                    >
                      {cancelling === appt.id ? 'Cancelando...' : 'Cancelar'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
