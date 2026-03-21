import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const session = await getSession()

  if (!session || (session.role !== 'ADMIN' && session.role !== 'SUPER_ADMIN')) {
    return NextResponse.json({ error: 'Acesso negado' }, { status: 403 })
  }

  const body = await request.json()
  const { userId, plan } = body

  if (!userId || !plan) {
    return NextResponse.json({ error: 'userId e plan são obrigatórios' }, { status: 400 })
  }

  const validPlans = ['INDIVIDUAL', 'FAMILIAR', 'FAMILIAR_PRO', 'EMPRESARIAL']
  if (!validPlans.includes(plan)) {
    return NextResponse.json(
      { error: `Plano inválido. Use: ${validPlans.join(', ')}` },
      { status: 400 }
    )
  }

  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) {
    return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 })
  }

  const subscription = await prisma.subscription.upsert({
    where: { userId },
    update: {
      plan: plan as 'INDIVIDUAL' | 'FAMILIAR' | 'FAMILIAR_PRO' | 'EMPRESARIAL',
      status: 'ACTIVE',
      startDate: new Date(),
      endDate: null,
    },
    create: {
      userId,
      plan: plan as 'INDIVIDUAL' | 'FAMILIAR' | 'FAMILIAR_PRO' | 'EMPRESARIAL',
      status: 'ACTIVE',
      startDate: new Date(),
    },
  })

  return NextResponse.json({ ok: true, subscription })
}
