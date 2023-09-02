import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common'
import { ChangeRoleDto } from './dto/change-role.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query('id') id: string) {
    return this.userService.getUsers({ id })
  }

  @Get(':id')
  getUser(@Query('id') id: string, @Param('userId') userId: string) {
    return this.userService.getUser({ id, userId })
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post(':id/change-role')
  changeRole(@Param('id') id: string, @Body() { role }: ChangeRoleDto) {
    this.userService.updateUserRole(id, role)
  }
}
