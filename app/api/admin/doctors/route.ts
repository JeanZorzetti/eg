import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const session = await getSession()

  if (!session || (session.role !== 'ADMIN' && session.role !== 'SUPER_ADMIN')) {
    return NextResponse.json({ error: 'Acesso negado' }, { status: 403 })
  }

  const body = await request.json()
  const { name, specialty, crm, state, bio, rating } = body

  if (!name || !specialty || !crm || !state) {
    return NextResponse.json(
      { error: 'Nome, especialidade, CRM e estado são obrigatórios' },
      { status: 400 }
    )
  }

  const existing = await prisma.doctor.findUnique({ where: { crm } })
  if (existing) {
    return NextResponse.json({ error: 'CRM já cadastrado' }, { status: 409 })
  }

  const doctor = await prisma.doctor.create({
    data: {
      name,
      specialty,
      crm,
      state,
      bio: bio ?? null,
      rating: rating ? parseFloat(rating) : 5.0,
    },
  })

  return NextResponse.json({ ok: true, doctor }, { status: 201 })
}
