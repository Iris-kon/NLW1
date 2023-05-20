import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  const itemsInsert = await prisma.items.createMany({
    data: [
      { title: 'Lâmpadas', image: 'lampadas.svg' },
      { title: 'Pilhas e Baterias', image: 'baterias.svg' },
      { title: 'Papéis e Papelão,', image: 'papeis-papelao.svg' },
      { title: 'Resíduo Eletrônico', image: 'eletronicos.svg' },
      { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
      { title: 'Óleo de cozinha', image: 'oleo.svg' },
    ],
    skipDuplicates: true,
  })
  console.log(itemsInsert)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
