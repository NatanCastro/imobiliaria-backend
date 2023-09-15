import { Injectable } from '@nestjs/common'
import { ClerkService } from '../clerk/clerk.service'

@Injectable()
export class UserService {
  constructor(private readonly clerkService: ClerkService) {}

  updateUserRole(userId: string, role: string) {
    return this.clerkService.updateUserRole(userId, role)
  }

  async getUsers() {
    return this.clerkService.getUsers()
  }

  async getUser({ id }: { id: string }) {
    return this.clerkService.getUser(id)
  }
}
