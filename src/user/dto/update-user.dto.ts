import { OmitType, PartialType } from '@nestjs/mapped-types'
import { User } from '../entities/user.entity'
import { Role } from '@prisma/client'
import { IsEnum, IsOptional, IsString } from 'class-validator'

export class UpdateUserDto extends PartialType(OmitType(User, ['id', 'password'])) {
  @IsOptional()
  @IsString()
  name?: string
  @IsOptional()
  @IsEnum(Role)
  role?: Role
}
