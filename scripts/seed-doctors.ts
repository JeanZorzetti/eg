import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const doctors = [
  {
    name: 'Dra. Ana Paula Ferreira',
    specialty: 'Cardiologia',
    crm: 'CRM/SC 12847',
    state: 'SC',
    bio: 'Especialista em cardiologia preventiva e tratamento de hipertensão arterial. Mais de 12 anos de experiência em prevenção cardiovascular, ecocardiografia e acompanhamento de doenças cardíacas crônicas.',
    rating: 4.9,
    reviewCount: 234,
    available: true,
  },
  {
    name: 'Dr. Rafael Costa',
    specialty: 'Psicologia',
    crm: 'CRM/SC 8432',
    state: 'SC',
    bio: 'Psicólogo clínico com foco em saúde mental, ansiedade e depressão. Utiliza abordagem cognitivo-comportamental para apoiar pacientes no desenvolvimento de habilidades de enfrentamento e bem-estar emocional.',
    rating: 4.8,
    reviewCount: 187,
    available: true,
  },
  {
    name: 'Dra. Mariana Lima',
    specialty: 'Clínica Geral',
    crm: 'CRM/SC 15219',
    state: 'SC',
    bio: 'Médica de família e clínica geral com ampla experiência em atenção primária à saúde. Realiza consultas de rotina, check-ups preventivos, orientação sobre doenças crônicas e coordenação do cuidado integral do paciente.',
    rating: 5.0,
    reviewCount: 312,
    available: true,
  },
  {
    name: 'Dr. Carlos Mendes',
    specialty: 'Dermatologia',
    crm: 'CRM/SC 21043',
    state: 'SC',
    bio: 'Dermatologista com especialização em dermatologia clínica e cosmética. Atua no diagnóstico e tratamento de acne, psoríase, vitiligo, dermatites e realização de dermatoscopia para rastreamento de lesões suspeitas.',
    rating: 4.7,
    reviewCount: 156,
    available: true,
  },
  {
    name: 'Dra. Sofia Rodrigues',
    specialty: 'Pediatria',
    crm: 'CRM/SC 9876',
    state: 'SC',
    bio: 'Pediatra com 15 anos de experiência no acompanhamento do desenvolvimento infantil. Realiza consultas de puericultura, vacinação, acompanhamento nutricional e atendimento de doenças agudas em crianças de 0 a 18 anos.',
    rating: 4.9,
    reviewCount: 289,
    available: true,
  },
  {
    name: 'Dr. Lucas Ferreira',
    specialty: 'Nutrição',
    crm: 'CRM/SC 18754',
    state: 'SC',
    bio: 'Nutricionista clínico especializado em reeducação alimentar, controle de peso e nutrição esportiva. Elabora planos alimentares personalizados para emagrecimento, hipertrofia, diabetes, hipertensão e outras condições de saúde.',
    rating: 4.8,
    reviewCount: 198,
    available: true,
  },
]

async function main() {
  console.log('Iniciando seed de médicos...')

  for (const doctor of doctors) {
    const created = await prisma.doctor.upsert({
      where: { crm: doctor.crm },
      update: doctor,
      create: doctor,
    })
    console.log(`Cadastrado: ${created.name} — ${created.specialty} (${created.crm})`)
  }

  console.log(`\nSeed concluído! ${doctors.length} médicos cadastrados.`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
