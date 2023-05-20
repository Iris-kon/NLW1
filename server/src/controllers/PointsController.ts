import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

type Iwhere = {
  city: string
  uf: string
  items?: {}
}

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query

    const parsedItems = JSON.parse(String(items))

    const where: Iwhere = {
      city: String(city),
      uf: String(uf),
    }

    if (parsedItems.length > 0) {
      where['items'] = {
        some: {
          itemId: {
            in: parsedItems,
          },
        },
      }
    }

    const points = await prisma.points.findMany({
      include: {
        items: true,
      },
      where,
    })

    const serializedPoints = points.map((point) => {
      return {
        ...point,
        image_url: `${process.env['BASE_URL']}/uploads/${point.image}`,
      }
    })

    return response.json(serializedPoints)
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const point = await prisma.points.findFirst({
      include: {
        items: {
          select: {
            items: {
              select: {
                title: true,
                image: true,
              },
            },
          },
        },
      },
      where: {
        id: id,
      },
    })

    if (!point) {
      return response.status(400).json({ message: 'Point not found' })
    }

    const serializedPoint = {
      ...point,
      image_url: `${process.env['BASE_URL']}/uploads/${point.image}`,
    }

    const items = point.items.map((i) => ({
      title: i.items.title,
      image: i.items.image,
    }))
    return response.json({ point: serializedPoint, items })
  }

  async create(request: Request, response: Response) {
    const { name, email, whatsapp, latitude, longitude, city, uf, items } =
      request.body

    const point = {
      image: request.file!.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    }

    const parsedItems = String(items)
      .split(',')
      .map((item) => String(item.trim()))

    const newPoint = await prisma.points.create({
      data: {
        ...point,
        items: {
          createMany: {
            data: [...parsedItems.map((i) => ({ itemId: i }))],
          },
        },
      },
    })

    return response.json({
      id: newPoint.id,
      ...point,
    })
  }
}

export default PointsController
