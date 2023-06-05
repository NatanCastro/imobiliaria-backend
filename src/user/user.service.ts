import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { findUser } from './types'
import { UpdateUserPasswordDto } from './dto/update-user-password.dto'
import { EncryptService } from 'src/encrypt/encrypt.service'
import { ReturnUserDto } from './dto/return-user.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private encrypt: EncryptService) {}

  async create(data: CreateUserDto): Promise<User> {
    const isEqualPassword = data.password === data.passwordConfirmation

    if (!isEqualPassword) {
      throw new HttpException('As senhas não são iguais', HttpStatus.BAD_REQUEST)
    }

    const encrypetedPassword = await this.encrypt.encrypt(data.password)

    const { name, role } = data

    const user: User = await this.prisma.user.create({
      data: {
        name,
        role,
        password: encrypetedPassword
      }
    })
    return user
  }

  async findMany(params: findUser): Promise<ReturnUserDto[]> {
    const { skip, take, cursor, where, orderBy } = params

    const users: ReturnUserDto[] = await this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    })
    return users
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
    const user: User = await this.prisma.user.findUnique({
      where
    })

    return user
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput
    data: Omit<Prisma.UserUpdateInput, 'password'>
  }): Promise<ReturnUserDto> {
    const { where, data } = params
    const user: ReturnUserDto = await this.prisma.user.update({
      data,
      where
    })

    return user
  }

  async updatePassword(params: { where: Prisma.UserWhereUniqueInput; data: UpdateUserPasswordDto }): Promise<void> {
    const { where, data } = params
    let user = await this.prisma.user.findUnique({ where })

    const isValidPassword = this.encrypt.compare(user.password, data.password)
    if (!isValidPassword) {
      throw new HttpException('Senha invalida', HttpStatus.BAD_REQUEST)
    }

    const isEqualPassword = data.newPassword === data.confirmNewPassword
    if (!isEqualPassword) {
      throw new HttpException('As senhas não são iguais', HttpStatus.BAD_REQUEST)
    }

    const encrypetedPassword = await this.encrypt.encrypt(data.newPassword)

    user = await this.prisma.user.update({
      where,
      data: {
        password: encrypetedPassword
      }
    })
  }

  remove(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where })
  }
}
