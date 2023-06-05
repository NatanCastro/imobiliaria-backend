import { Prisma } from '@prisma/client'

export type findUser = {
  skip?: number
  take?: number
  cursor?: Prisma.UserWhereUniqueInput
  where?: Prisma.UserWhereInput
  orderBy?: Prisma.UserOrderByWithRelationInput
}
