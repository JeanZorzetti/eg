import { prisma } from '@/lib/prisma'
import MedicosClient from './MedicosClient'

export const metadata = {
  title: 'Medicos | Admin EG Telemedicina',
}

export default async function AdminMedicosPage() {
  const doctors = await prisma.doctor.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#26215C]">Medicos</h2>
          <p className="text-gray-500 text-sm mt-1">
            {doctors.length} medico{doctors.length !== 1 ? 's' : ''} cadastrado{doctors.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
      <MedicosClient doctors={doctors} />
    </div>
  )
}
