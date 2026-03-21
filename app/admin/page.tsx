import { prisma } from '@/lib/prisma'

const PLAN_PRICES: Record<string, number> = {
  INDIVIDUAL: 44,
  FAMILIAR: 162,
  FAMILIAR_PRO: 228,
  EMPRESARIAL: 0,
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

const statusLabel: Record<string, string> = {
  SCHEDULED: 'Agendada',
  CONFIRMED: 'Confirmada',
  COMPLETED: 'Concluída',
  CANCELLED: 'Cancelada',
}

const statusClass: Record<string, string> = {
  SCHEDULED: 'bg-amber-50 text-amber-700 border-amber-200',
  CONFIRMED: 'bg-blue-50 text-blue-700 border-blue-200',
  COMPLETED: 'bg-green-50 text-green-700 border-green-200',
  CANCELLED: 'bg-gray-50 text-gray-500 border-gray-200',
}

export default async function AdminPage() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [
    totalPatients,
    activeSubscriptions,
    appointmentsToday,
    recentAppointments,
    recentRegistrations,
  ] = await Promise.all([
    prisma.user.count({ where: { role: 'PATIENT' } }),
    prisma.subscription.findMany({
      where: { status: 'ACTIVE' },
      select: { plan: true },
    }),
    prisma.appointment.count({
      where: {
        dateTime: { gte: today, lt: tomorrow },
      },
    }),
    prisma.appointment.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { name: true } } },
    }),
    prisma.user.findMany({
      where: { role: 'PATIENT' },
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, email: true, createdAt: true },
    }),
  ])

  const activeSubsCount = activeSubscriptions.length
  const estimatedRevenue = activeSubscriptions.reduce(
    (acc, sub) => acc + (PLAN_PRICES[sub.plan] ?? 0),
    0
  )

  const stats = [
    {
      label: 'Total de Pacientes',
      value: totalPatients.toString(),
      sub: 'cadastros ativos',
      color: 'bg-[#7F77DD]',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: 'Assinantes Ativos',
      value: activeSubsCount.toString(),
      sub: 'com plano ativo',
      color: 'bg-green-500',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Consultas Hoje',
      value: appointmentsToday.toString(),
      sub: 'agendadas para hoje',
      color: 'bg-blue-500',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Receita Estimada',
      value: formatCurrency(estimatedRevenue),
      sub: 'MRR (planos ativos)',
      color: 'bg-emerald-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#26215C]">Dashboard</h2>
        <p className="text-gray-500 text-sm mt-1">Visão geral da plataforma EG Telemedicina</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
                <p className="text-2xl font-bold text-[#26215C] mt-1">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.sub}</p>
              </div>
              <div className={`${stat.color} text-white p-2.5 rounded-xl flex-shrink-0`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent appointments */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-semibold text-[#26215C]">Ultimas Consultas</h3>
            <a href="/admin/consultas" className="text-xs text-[#7F77DD] hover:underline font-medium">
              Ver todas
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                  <th className="px-6 py-3 text-left font-medium">Paciente</th>
                  <th className="px-6 py-3 text-left font-medium">Especialidade</th>
                  <th className="px-6 py-3 text-left font-medium">Data</th>
                  <th className="px-6 py-3 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-400 text-sm">
                      Nenhuma consulta registrada
                    </td>
                  </tr>
                ) : (
                  recentAppointments.map((apt) => (
                    <tr key={apt.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 font-medium text-gray-800">{apt.user.name}</td>
                      <td className="px-6 py-3 text-gray-500">{apt.specialty}</td>
                      <td className="px-6 py-3 text-gray-500 whitespace-nowrap">{formatDate(apt.dateTime)}</td>
                      <td className="px-6 py-3">
                        <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusClass[apt.status] ?? 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                          {statusLabel[apt.status] ?? apt.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent registrations */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-semibold text-[#26215C]">Ultimos Cadastros</h3>
            <a href="/admin/pacientes" className="text-xs text-[#7F77DD] hover:underline font-medium">
              Ver todos
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                  <th className="px-6 py-3 text-left font-medium">Nome</th>
                  <th className="px-6 py-3 text-left font-medium">Email</th>
                  <th className="px-6 py-3 text-left font-medium">Cadastro</th>
                </tr>
              </thead>
              <tbody>
                {recentRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-8 text-center text-gray-400 text-sm">
                      Nenhum cadastro registrado
                    </td>
                  </tr>
                ) : (
                  recentRegistrations.map((user) => (
                    <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 font-medium text-gray-800">{user.name}</td>
                      <td className="px-6 py-3 text-gray-500 text-xs">{user.email}</td>
                      <td className="px-6 py-3 text-gray-500 whitespace-nowrap text-xs">
                        {new Intl.DateTimeFormat('pt-BR').format(new Date(user.createdAt))}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
