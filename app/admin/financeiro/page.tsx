import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Financeiro | Admin EG Telemedicina',
}

const PLAN_PRICES: Record<string, number> = {
  INDIVIDUAL: 44,
  FAMILIAR: 162,
  FAMILIAR_PRO: 228,
  EMPRESARIAL: 0,
}

const PLAN_LABELS: Record<string, string> = {
  INDIVIDUAL: 'Individual',
  FAMILIAR: 'Familiar',
  FAMILIAR_PRO: 'Familiar Pro',
  EMPRESARIAL: 'Empresarial',
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
}

export default async function AdminFinanceiroPage() {
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  const [activeSubscriptions, recentSubscriptions, churnCount] = await Promise.all([
    prisma.subscription.findMany({
      where: { status: 'ACTIVE' },
      select: { plan: true },
    }),
    prisma.subscription.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      where: { status: 'ACTIVE' },
      include: {
        user: { select: { name: true } },
      },
    }),
    prisma.subscription.count({
      where: {
        status: 'CANCELLED',
        updatedAt: { gte: thirtyDaysAgo },
      },
    }),
  ])

  // Group by plan
  const planCounts: Record<string, number> = {}
  let totalMRR = 0

  for (const sub of activeSubscriptions) {
    planCounts[sub.plan] = (planCounts[sub.plan] ?? 0) + 1
    totalMRR += PLAN_PRICES[sub.plan] ?? 0
  }

  const planRows = Object.entries(PLAN_PRICES)
    .filter(([plan]) => plan !== 'EMPRESARIAL')
    .map(([plan, price]) => ({
      plan,
      label: PLAN_LABELS[plan] ?? plan,
      count: planCounts[plan] ?? 0,
      revenue: (planCounts[plan] ?? 0) * price,
      price,
    }))

  const totalCount = activeSubscriptions.length

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#26215C]">Financeiro</h2>
        <p className="text-gray-500 text-sm mt-1">Visao geral de receita e assinaturas</p>
      </div>

      {/* MRR highlight */}
      <div className="bg-gradient-to-br from-[#7F77DD] to-[#26215C] rounded-2xl p-8 text-white">
        <p className="text-sm font-medium text-white/70 uppercase tracking-wide mb-2">
          Receita Mensal Recorrente (MRR)
        </p>
        <p className="text-5xl font-bold tracking-tight">{formatCurrency(totalMRR)}</p>
        <p className="text-sm text-white/60 mt-2">
          {totalCount} assinante{totalCount !== 1 ? 's' : ''} ativo{totalCount !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Breakdown table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-[#26215C]">Distribuicao por Plano</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-3 text-left font-medium">Plano</th>
                <th className="px-6 py-3 text-left font-medium">Preco</th>
                <th className="px-6 py-3 text-left font-medium">Qtd. Assinantes</th>
                <th className="px-6 py-3 text-left font-medium">Receita</th>
              </tr>
            </thead>
            <tbody>
              {planRows.map((row) => (
                <tr key={row.plan} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800">{row.label}</td>
                  <td className="px-6 py-4 text-gray-500">{formatCurrency(row.price)}/mês</td>
                  <td className="px-6 py-4 text-gray-700">{row.count}</td>
                  <td className="px-6 py-4 font-semibold text-[#26215C]">{formatCurrency(row.revenue)}</td>
                </tr>
              ))}
              <tr className="bg-[#EEEDFE]">
                <td className="px-6 py-4 font-bold text-[#26215C]">Total</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 font-bold text-[#26215C]">{totalCount}</td>
                <td className="px-6 py-4 font-bold text-[#26215C] text-base">{formatCurrency(totalMRR)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid: recent subs + churn */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent subscriptions */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-[#26215C]">Ultimas Assinaturas Ativas</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100 bg-gray-50/50">
                  <th className="px-6 py-3 text-left font-medium">Paciente</th>
                  <th className="px-6 py-3 text-left font-medium">Plano</th>
                  <th className="px-6 py-3 text-left font-medium">Inicio</th>
                  <th className="px-6 py-3 text-left font-medium">Valor</th>
                </tr>
              </thead>
              <tbody>
                {recentSubscriptions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-gray-400">
                      Nenhuma assinatura ativa
                    </td>
                  </tr>
                ) : (
                  recentSubscriptions.map((sub) => (
                    <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 font-medium text-gray-800">{sub.user.name}</td>
                      <td className="px-6 py-3">
                        <span className="text-xs bg-[#EEEDFE] text-[#7F77DD] font-semibold px-2.5 py-0.5 rounded-full">
                          {PLAN_LABELS[sub.plan] ?? sub.plan}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-500 text-xs whitespace-nowrap">
                        {formatDate(sub.startDate)}
                      </td>
                      <td className="px-6 py-3 font-semibold text-[#26215C]">
                        {formatCurrency(PLAN_PRICES[sub.plan] ?? 0)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Churn card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-[#26215C] mb-4">Churn (ultimos 30 dias)</h3>
          <div className="text-center py-6">
            <div className={`text-5xl font-bold mb-2 ${churnCount > 0 ? 'text-red-500' : 'text-green-600'}`}>
              {churnCount}
            </div>
            <p className="text-sm text-gray-500">
              cancelamento{churnCount !== 1 ? 's' : ''}
            </p>
            {churnCount === 0 && (
              <p className="text-xs text-green-600 mt-3 font-medium">
                Sem cancelamentos no periodo!
              </p>
            )}
            {churnCount > 0 && (
              <p className="text-xs text-gray-400 mt-3">
                Receita perdida estimada:{' '}
                <span className="font-semibold text-red-500">
                  {formatCurrency(churnCount * (totalMRR / Math.max(totalCount, 1)))}
                </span>
              </p>
            )}
          </div>

          <div className="border-t border-gray-100 pt-4 mt-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Taxa de churn</span>
              <span className="font-semibold text-gray-800">
                {totalCount > 0 ? ((churnCount / totalCount) * 100).toFixed(1) : '0.0'}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
