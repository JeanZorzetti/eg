import { redirect } from 'next/navigation'
import { getPatientSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import PlataformaShell from './PlataformaShell'

export const metadata = {
  title: 'Plataforma | EG Telemedicina',
}

export default async function PlataformaLayout({ children }: { children: React.ReactNode }) {
  const session = await getPatientSession()
  if (!session) redirect('/login')

  const user = await prisma.user.findUnique({
    where: { id: session.id },
    select: { name: true },
  })

  return <PlataformaShell name={user?.name ?? 'Paciente'}>{children}</PlataformaShell>
}
