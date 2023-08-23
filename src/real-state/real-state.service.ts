import { Injectable } from '@nestjs/common'
import { CreateRealStateDto } from './dto/create-real-state.dto'
import { UpdateRealStateDto } from './dto/update-real-state.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'
import { StripeService } from 'src/stripe/stripe.service'

@Injectable()
export class RealStateService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly stripeService: StripeService
  ) {}

  async create({
    state,
    city,
    description,
    name,
    parkingSpace,
    bathroomNumber,
    swimmingpool,
    condominium,
    area,
    number,
    street,
    district,
    bedroomNumber,
    suiteNumber,
    rentValue,
    purchaseValue,
    images
  }: CreateRealStateDto) {
    const realState = await this.prismaService.realState.create({
      data: {
        name,
        description,
        state,
        city,
        purchaseValue,
        rentValue,
        bedroomNumber,
        district,
        street,
        number,
        area,
        bathroomNumber,
        suiteNumber,
        swimmingpool,
        condominium,
        parkingSpace,
        Image: {
          createMany: {
            data: images
          }
        }
      },
      include: {
        Image: {
          select: {
            url: true
          }
        }
      }
    })
    if (realState.rentValue) {
      await this.stripeService.addProduct({
        id: realState.id,
        name: realState.name,
        price: realState.rentValue,
        images: realState.Image.map((image) => image.url)
      })
      const rentUrl = await this.stripeService.createPaymentLink(realState.id)
      this.prismaService.realState.update({
        where: {
          id: realState.id
        },
        data: {
          rentUrl
        }
      })
    }
    return realState
  }

  async uploadImages(files: Express.Multer.File[]) {
    const uploadedImages = await Promise.all(
      files.map(async (file) => {
        const { public_id, secure_url } = await this.cloudinaryService.uploadToCloudinary(file)
        return { public_id, secure_url }
      })
    )
    return uploadedImages
  }

  async getCities() {
    return await this.prismaService.realState.findMany({ select: { city: true }, distinct: ['city'] })
  }

  async getDistrictsByCity(city: string) {
    return this.prismaService.realState.findMany({
      select: { district: true },
      where: {
        city: { equals: city }
      },
      distinct: ['district']
    })
  }

  async find(findRealState: {
    skip?: number
    take?: number
    cursor?: Prisma.RealStateWhereUniqueInput
    where?: Prisma.RealStateWhereInput
    orderBy?: Prisma.RealStateOrderByWithRelationInput
  }) {
    const realStates = await this.prismaService.realState.findMany({
      ...findRealState,
      include: {
        Image: {
          select: {
            url: true,
            cloudId: true
          }
        }
      }
    })
    return realStates
  }

  async findOne(id: string) {
    const realState = await this.prismaService.realState.findUnique({
      where: { id },
      include: {
        Image: {
          select: {
            cloudId: true,
            url: true
          }
        }
      }
    })
    return realState
  }

  async update(id: string, updateRealStateDto: UpdateRealStateDto) {
    const realState = await this.prismaService.realState.update({
      where: { id },
      data: { ...updateRealStateDto },
      include: {
        Image: {
          select: {
            url: true
          }
        }
      }
    })
    this.stripeService.updateProduct(id, {
      name: realState.name,
      images: realState.Image.map((image) => image.url),
      price: realState.rentValue
    })
    return realState
  }

  async remove(id: string) {
    const realState = await this.prismaService.realState.delete({
      where: { id },
      include: { Image: { select: { cloudId: true } } }
    })
    realState.Image.forEach((i) => this.cloudinaryService.deleteFromCloudinary(i.cloudId))
    await this.stripeService.deleteProduct(id)
    return realState
  }

  async updateLessorId(realStateId: string, lessorId: string) {
    this.prismaService.realState.update({
      where: {
        id: realStateId
      },
      data: {
        lessorId: lessorId !== '' ? lessorId : null
      }
    })
  }
}
