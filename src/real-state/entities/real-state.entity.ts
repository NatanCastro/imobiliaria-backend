import { RealState as PrismaRealState } from '@prisma/client'

export class RealState implements PrismaRealState {
  name: string
  description: string
  bedroomNumber: number
  suiteNumber: number
  bathroomNumber: number
  parkingSpace: number
  area: number
  state: string
  city: string
  district: string
  street: string
  number: string
  rentValue: number
  purchaseValue: number
  swimmingpool: boolean
  condominium: boolean
  id: string
}
