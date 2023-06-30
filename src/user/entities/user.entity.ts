import { User as PrismaUser, Role } from '@prisma/client'

export class User implements PrismaUser {
  id: string
  name: string
  role: Role
  password: string
}
