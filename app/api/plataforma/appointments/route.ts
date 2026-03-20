import { NextRequest, NextResponse } from 'next/server'
import { getPatientSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const session = await getPatientSession()
  if (!session) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })

  const status = request.nextUrl.searchParams.get('status')

  const appointments = await prisma.appointment.findMany({
    where: {
      userId: session.id,
      ...(status ? { status: status as 'SCHEDULED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED' } : {}),
    },
    orderBy: { dateTime: 'desc' },
  })

  return NextResponse.json(appointments)
}

export async function POST(request: NextRequest) {
  const session = await getPatientSession()
  if (!session) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })

  const { specialty, dateTime, notes } = await request.json()

  if (!specialty || !dateTime) {
    return NextResponse.json({ error: 'Especialidade e data/hora são obrigatórios' }, { status: 400 })
  }

  const dt = new Date(dateTime)
  if (dt <= new Date()) {
    return NextResponse.json({ error: 'A data deve ser no futuro' }, { status: 400 })
  }

  const appointment = await prisma.appointment.create({
    data: {
      userId: session.id,
      specialty,
      dateTime: dt,
      notes: notes || null,
      status: 'SCHEDULED',
    },
  })

  return NextResponse.json(appointment, { status: 201 })
}
