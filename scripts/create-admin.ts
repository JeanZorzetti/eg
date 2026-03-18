import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcryptjs'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const email = process.argv[2] ?? 'admin@egtelemedicina.com.br'
  const password = process.argv[3] ?? 'Admin@2026'
  const name = process.argv[4] ?? 'Administrador'

  const passwordHash = await bcrypt.hash(password, 12)

  const user = await prisma.user.upsert({
    where: { email },
    update: { passwordHash, name },
    create: { email, passwordHash, name, role: 'SUPER_ADMIN' },
  })

  console.log(`✅ Usuário criado/atualizado: ${user.email} (${user.role})`)
  console.log(`   Senha: ${password}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
