import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await prisma.items.findMany()

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${process.env['BASE_URL']}/uploads/${item.image}`,
      }
    })

    return response.json(serializedItems)
  }
}
export default ItemsController
