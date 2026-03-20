import { NextRequest, NextResponse } from 'next/server'
import { getPatientSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getPatientSession()
  if (!session) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })

  const { id } = await params

  const appointment = await prisma.appointment.findUnique({ where: { id } })

  if (!appointment || appointment.userId !== session.id) {
    return NextResponse.json({ error: 'Consulta não encontrada' }, { status: 404 })
  }

  if (!['SCHEDULED', 'CONFIRMED'].includes(appointment.status)) {
    return NextResponse.json({ error: 'Não é possível cancelar esta consulta' }, { status: 400 })
  }

  const updated = await prisma.appointment.update({
    where: { id },
    data: { status: 'CANCELLED' },
  })

  return NextResponse.json(updated)
}
