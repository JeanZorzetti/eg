import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'

export default async function AdminPage() {
  const session = await getSession()
  if (!session) redirect('/login')

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#26215C]">Painel Administrativo — EG Telemedicina</h1>
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="text-sm text-gray-500 hover:text-red-600 transition-colors"
          >
            Sair
          </button>
        </form>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
          <div className="text-4xl mb-4">👋</div>
          <h2 className="text-2xl font-semibold text-[#26215C] mb-2">
            Bem-vindo, {session.email}
          </h2>
          <p className="text-gray-500">Painel em construção. Em breve mais funcionalidades.</p>
        </div>
      </main>
    </div>
  )
}
