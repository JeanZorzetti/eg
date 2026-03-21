import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession()

  if (!session || (session.role !== 'ADMIN' && session.role !== 'SUPER_ADMIN')) {
    return NextResponse.json({ error: 'Acesso negado' }, { status: 403 })
  }

  const { id } = await params
  const body = await request.json()

  const existing = await prisma.doctor.findUnique({ where: { id } })
  if (!existing) {
    return NextResponse.json({ error: 'Médico não encontrado' }, { status: 404 })
  }

  const updateData: Record<string, unknown> = {}
  if (body.name !== undefined) updateData.name = body.name
  if (body.bio !== undefined) updateData.bio = body.bio
  if (body.available !== undefined) updateData.available = body.available
  if (body.rating !== undefined) updateData.rating = parseFloat(body.rating)
  if (body.specialty !== undefined) updateData.specialty = body.specialty
  if (body.state !== undefined) updateData.state = body.state

  const updated = await prisma.doctor.update({
    where: { id },
    data: updateData,
  })

  return NextResponse.json({ ok: true, doctor: updated })
}
