import { Role } from '@prisma/client'
import { User } from '../entities/user.entity'
import { OmitType } from '@nestjs/mapped-types'

export class ReturnUserDto extends OmitType(User, ['password']) {
  id: string
  name: string
  role: Role
}
