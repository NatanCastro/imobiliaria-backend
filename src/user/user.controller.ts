import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { findUser } from './types'
import { UpdateUserDto } from './dto/update-user.dto'
import { UpdateUserPasswordDto } from './dto/update-user-password.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get()
  findMany(@Query() query: findUser) {
    return this.userService.findMany({ ...query })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne({ id })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update({ where: { id }, data: updateUserDto })
  }

  @Patch(':id/password')
  updatePassword(@Param('id') id: string, @Body() updateUserPasswordDto: UpdateUserPasswordDto) {
    return this.userService.updatePassword({ where: { id }, data: updateUserPasswordDto })
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove({ id })
  }
}
