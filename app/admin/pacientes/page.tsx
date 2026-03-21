import { prisma } from '@/lib/prisma'
import PacientesClient from './PacientesClient'

export const metadata = {
  title: 'Pacientes | Admin EG Telemedicina',
}

export default async function AdminPacientesPage() {
  const patients = await prisma.user.findMany({
    where: { role: 'PATIENT' },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
      phone: true,
      createdAt: true,
      subscription: {
        select: { plan: true, status: true },
      },
    },
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#26215C]">Pacientes</h2>
        <p className="text-gray-500 text-sm mt-1">
          {patients.length} paciente{patients.length !== 1 ? 's' : ''} cadastrado{patients.length !== 1 ? 's' : ''}
        </p>
      </div>
      <PacientesClient patients={patients} />
    </div>
  )
}
