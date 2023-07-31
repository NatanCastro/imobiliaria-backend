import { Body, Controller, Param, Post } from '@nestjs/common'
import { ChangeRoleDto } from './dto/change-role.dto'
import { ClerkService } from 'src/clerk/clerk.service'

@Controller('user')
export class UserController {
  constructor(private readonly clerkService: ClerkService) {}
  @Post(':id/change-role')
  changeRole(@Param('id') id: string, @Body() { role }: ChangeRoleDto) {
    this.clerkService.updateUserRole(id, role)
  }
}
