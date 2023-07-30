import { Body, Controller, Get } from '@nestjs/common'
import { ChangeRoleDto } from './dto/change-role.dto'
import { ClerkService } from 'src/clerk/clerk.service'

@Controller('user')
export class UserController {
  constructor(private readonly clerkService: ClerkService) {}
  @Get('change-role')
  changeRole(@Body() { userId, role }: ChangeRoleDto) {
    this.clerkService.updateUserRole(userId, role)
  }
}
