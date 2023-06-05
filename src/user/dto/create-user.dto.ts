import { Role } from '@prisma/client'
import { User } from '../entities/user.entity'
import { OmitType } from '@nestjs/mapped-types'
import { IsEnum, IsString, IsStrongPassword } from 'class-validator'

export class CreateUserDto extends OmitType<User, 'id'>(User, ['id']) {
  @IsString()
  name: string
  @IsEnum(Role, { message: 'role must be costumer or admin' })
  role: Role
  @IsStrongPassword({ minLength: 8 }, { message: 'password is not strong enough' })
  password: string
  @IsStrongPassword({ minLength: 8 }, { message: 'passwordConfirmation is not strong enough' })
  passwordConfirmation: string
}
