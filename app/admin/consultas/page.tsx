import { prisma } from '@/lib/prisma'
import AppointmentActions from './AppointmentActions'
import ConsultasFilter from './ConsultasFilter'

export const metadata = {
  title: 'Consultas | Admin EG Telemedicina',
}

const STATUS_LABELS: Record<string, string> = {
  SCHEDULED: 'Agendada',
  CONFIRMED: 'Confirmada',
  COMPLETED: 'Concluida',
  CANCELLED: 'Cancelada',
}

const STATUS_CLASSES: Record<string, string> = {
  SCHEDULED: 'bg-amber-50 text-amber-700 border-amber-200',
  CONFIRMED: 'bg-blue-50 text-blue-700 border-blue-200',
  COMPLETED: 'bg-green-50 text-green-700 border-green-200',
  CANCELLED: 'bg-gray-50 text-gray-500 border-gray-200',
}

const ALL_STATUSES = ['ALL', 'SCHEDULED', 'CONFIRMED', 'COMPLETED', 'CANCELLED'] as const

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

export default async function AdminConsultasPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status: statusParam } = await searchParams
  const statusFilter =
    statusParam && statusParam !== 'ALL' && ALL_STATUSES.includes(statusParam as typeof ALL_STATUSES[number])
      ? statusParam
      : undefined

  const appointments = await prisma.appointment.findMany({
    where: statusFilter ? { status: statusFilter as 'SCHEDULED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED' } : undefined,
    orderBy: { dateTime: 'desc' },
    include: {
      user: { select: { name: true } },
    },
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#26215C]">Consultas</h2>
        <p className="text-gray-500 text-sm mt-1">
          {appointments.length} consulta{appointments.length !== 1 ? 's' : ''}
          {statusFilter ? ` com status "${STATUS_LABELS[statusFilter]}"` : ' no total'}
        </p>
      </div>

      {/* Filter tabs */}
      <ConsultasFilter currentStatus={statusParam ?? 'ALL'} />

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-3 text-left font-medium">Paciente</th>
                <th className="px-6 py-3 text-left font-medium">Especialidade</th>
                <th className="px-6 py-3 text-left font-medium">Medico</th>
                <th className="px-6 py-3 text-left font-medium">Data/Hora</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-left font-medium">Acoes</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    Nenhuma consulta encontrada
                  </td>
                </tr>
              ) : (
                appointments.map((apt) => (
                  <tr key={apt.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3 font-medium text-gray-800 whitespace-nowrap">{apt.user.name}</td>
                    <td className="px-6 py-3 text-gray-600">{apt.specialty}</td>
                    <td className="px-6 py-3 text-gray-500 text-xs">{apt.doctorName ?? '—'}</td>
                    <td className="px-6 py-3 text-gray-500 whitespace-nowrap text-xs">{formatDateTime(apt.dateTime)}</td>
                    <td className="px-6 py-3">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${STATUS_CLASSES[apt.status] ?? 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                        {STATUS_LABELS[apt.status] ?? apt.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <AppointmentActions appointmentId={apt.id} currentStatus={apt.status} />
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
