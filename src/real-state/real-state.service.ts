import { Injectable } from '@nestjs/common'
import { CreateRealStateDto } from './dto/create-real-state.dto'
import { UpdateRealStateDto } from './dto/update-real-state.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class RealStateService {
  constructor(private prismaService: PrismaService) {}

  async create({
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
    rentValue,
    purchaseValue
  }: CreateRealStateDto) {
    const realState = await this.prismaService.realState.create({
      data: {
        name,
        description,
        city,
        purchaseValue,
        rentValue,
        bedroomNumber,
        district,
        street,
        number,
        area,
        bathroomNumber,
        swimmingpool,
        condominium,
        parkingSpace
      }
    })
    return realState
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
    const realStates = await this.prismaService.realState.findMany(findRealState)
    return realStates
  }

  async findOne(id: string) {
    const realState = await this.prismaService.realState.findUnique({ where: { id } })
    return realState
  }

  async update(id: string, updateRealStateDto: UpdateRealStateDto) {
    const realState = await this.prismaService.realState.update({ where: { id }, data: { ...updateRealStateDto } })
    return realState
  }

  async remove(id: string) {
    const realState = await this.prismaService.realState.delete({ where: { id } })
    return realState
  }
}
