import { getPatientSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import StatusBadge from '@/components/plataforma/StatusBadge'

export default async function DashboardPage() {
  const session = await getPatientSession()
  if (!session) redirect('/login')

  const user = await prisma.user.findUnique({
    where: { id: session.id },
    select: { name: true },
  })

  const now = new Date()

  const [upcoming, totalCount, completedCount] = await Promise.all([
    prisma.appointment.findMany({
      where: { userId: session.id, dateTime: { gte: now }, status: { in: ['SCHEDULED', 'CONFIRMED'] } },
      orderBy: { dateTime: 'asc' },
      take: 3,
    }),
    prisma.appointment.count({ where: { userId: session.id } }),
    prisma.appointment.count({ where: { userId: session.id, status: 'COMPLETED' } }),
  ])

  const nextAppt = upcoming[0]

  const fmtDate = (d: Date) =>
    d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
  const fmtTime = (d: Date) =>
    d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#26215C]">Olá, {user?.name?.split(' ')[0]}!</h1>
        <p className="text-gray-500 text-sm mt-1">Bem-vindo à sua plataforma de saúde</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Próxima consulta</p>
          {nextAppt ? (
            <div className="mt-2">
              <p className="text-lg font-bold text-[#26215C]">{fmtDate(nextAppt.dateTime)}</p>
              <p className="text-sm text-gray-500">{fmtTime(nextAppt.dateTime)} — {nextAppt.specialty}</p>
            </div>
          ) : (
            <p className="text-sm text-gray-400 mt-2">Nenhuma agendada</p>
          )}
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Total de consultas</p>
          <p className="text-3xl font-bold text-[#26215C] mt-2">{totalCount}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Concluídas</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{completedCount}</p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-3">
        <Link
          href="/plataforma/agendar"
          className="inline-flex items-center gap-2 rounded-xl bg-[#7F77DD] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#26215C] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Agendar consulta
        </Link>
        <Link
          href="/plataforma/consultas"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Ver histórico
        </Link>
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-[#26215C] mb-3">Próximas consultas</h2>
          <div className="space-y-3">
            {upcoming.map((appt) => (
              <div key={appt.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#EEEDFE] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{appt.specialty}</p>
                    <p className="text-xs text-gray-500">{fmtDate(appt.dateTime)} às {fmtTime(appt.dateTime)}</p>
                  </div>
                </div>
                <StatusBadge status={appt.status} />
              </div>
            ))}
          </div>
        </div>
      )}

      {totalCount === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-8 text-center">
          <div className="w-14 h-14 bg-[#EEEDFE] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-[#7F77DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-[#26215C]">Nenhuma consulta ainda</h3>
          <p className="text-sm text-gray-500 mt-1 mb-4">Agende sua primeira consulta e comece a cuidar da sua saúde</p>
          <Link
            href="/plataforma/agendar"
            className="inline-flex items-center gap-2 rounded-xl bg-[#7F77DD] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#26215C] transition-colors"
          >
            Agendar primeira consulta
          </Link>
        </div>
      )}
    </div>
  )
}
