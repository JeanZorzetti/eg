'use client'

import { useState, useMemo } from 'react'
import ActivatePlanForm from './ActivatePlanForm'

type Patient = {
  id: string
  name: string
  email: string
  cpf: string | null
  phone: string | null
  createdAt: Date
  subscription: {
    plan: string
    status: string
  } | null
}

const PLAN_LABELS: Record<string, string> = {
  INDIVIDUAL: 'Individual',
  FAMILIAR: 'Familiar',
  FAMILIAR_PRO: 'Familiar Pro',
  EMPRESARIAL: 'Empresarial',
}

function maskCpf(cpf: string | null): string {
  if (!cpf) return '—'
  const digits = cpf.replace(/\D/g, '')
  if (digits.length !== 11) return cpf
  return `XXX.XXX.XXX-${digits.slice(9)}`
}

const PAGE_SIZE = 20

export default function PacientesClient({ patients }: { patients: Patient[] }) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return patients
    return patients.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.email.toLowerCase().includes(q)
    )
  }, [patients, search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por nome ou email..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7F77DD]"
          />
        </div>
        <span className="text-sm text-gray-400">{filtered.length} paciente{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-3 text-left font-medium">Nome</th>
                <th className="px-6 py-3 text-left font-medium">Email</th>
                <th className="px-6 py-3 text-left font-medium">CPF</th>
                <th className="px-6 py-3 text-left font-medium">Telefone</th>
                <th className="px-6 py-3 text-left font-medium">Plano</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-left font-medium">Cadastro</th>
                <th className="px-6 py-3 text-left font-medium">Acao</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-10 text-center text-gray-400">
                    Nenhum paciente encontrado
                  </td>
                </tr>
              ) : (
                paginated.map((p) => {
                  const isSubscriber = p.subscription?.status === 'ACTIVE'
                  return (
                    <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 font-medium text-gray-800 whitespace-nowrap">{p.name}</td>
                      <td className="px-6 py-3 text-gray-500 text-xs">{p.email}</td>
                      <td className="px-6 py-3 text-gray-500 font-mono text-xs">{maskCpf(p.cpf)}</td>
                      <td className="px-6 py-3 text-gray-500 text-xs">{p.phone ?? '—'}</td>
                      <td className="px-6 py-3 text-gray-600 text-xs">
                        {p.subscription ? PLAN_LABELS[p.subscription.plan] ?? p.subscription.plan : 'Sem plano'}
                      </td>
                      <td className="px-6 py-3">
                        <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                          isSubscriber
                            ? 'bg-green-50 text-green-700 border-green-200'
                            : 'bg-gray-50 text-gray-500 border-gray-200'
                        }`}>
                          {isSubscriber ? 'Assinante' : 'Cadastrado'}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-500 text-xs whitespace-nowrap">
                        {new Intl.DateTimeFormat('pt-BR').format(new Date(p.createdAt))}
                      </td>
                      <td className="px-6 py-3">
                        <ActivatePlanForm userId={p.id} userName={p.name} />
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">
            Pagina {page} de {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs font-medium"
            >
              Anterior
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs font-medium"
            >
              Proxima
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
