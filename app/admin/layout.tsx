import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import AdminShell from './AdminShell'

export const metadata = {
  title: 'Admin | EG Telemedicina',
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  if (!session) redirect('/login')
  if (session.role === 'PATIENT') redirect('/')

  return <AdminShell>{children}</AdminShell>
}
