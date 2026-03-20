import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, password, phone, cpf } = body

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Nome, e-mail e senha são obrigatórios' }, { status: 400 })
  }

  if (password.length < 6) {
    return NextResponse.json({ error: 'A senha deve ter pelo menos 6 caracteres' }, { status: 400 })
  }

  const existing = await prisma.user.findFirst({
    where: { OR: [{ email }, ...(cpf ? [{ cpf }] : [])] },
  })

  if (existing) {
    const field = existing.email === email ? 'e-mail' : 'CPF'
    return NextResponse.json({ error: `Já existe uma conta com este ${field}` }, { status: 409 })
  }

  const passwordHash = await bcrypt.hash(password, 12)

  await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
      phone: phone || null,
      cpf: cpf || null,
      role: 'PATIENT',
    },
  })

  return NextResponse.json({ ok: true }, { status: 201 })
}
