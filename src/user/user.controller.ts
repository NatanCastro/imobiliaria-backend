import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'
import { ChangeRoleDto } from './dto/change-role.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers()
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser({ id })
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post(':id/change-role')
  changeRole(@Param('id') id: string, @Body() { role }: ChangeRoleDto) {
    this.userService.updateUserRole(id, role)
  }
}
