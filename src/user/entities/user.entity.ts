import { User as PrismaUser, Role } from '@prisma/client'
import {} from 'class-validator'

export class User implements PrismaUser {
  id: string
  name: string
  role: Role
  password: string
}
