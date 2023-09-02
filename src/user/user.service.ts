import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ClerkService } from '../clerk/clerk.service'

@Injectable()
export class UserService {
  constructor(private readonly clerkService: ClerkService) {}

  updateUserRole(userId: string, role: string) {
    return this.clerkService.updateUserRole(userId, role)
  }

  async getUsers({ id }: { id: string }) {
    const isAdmin: boolean = (await this.clerkService.getUser(id)).publicMetadata['role'] === 'admin'
    if (!isAdmin) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
    return this.clerkService.getUsers()
  }

  async getUser({ id, userId }: { id: string; userId: string }) {
    const isAdmin: boolean = (await this.clerkService.getUser(id)).publicMetadata['role'] === 'admin'
    if (!isAdmin) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }

    return this.clerkService.getUser(userId)
  }
}
