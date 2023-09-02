import clerk from '@clerk/clerk-sdk-node'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ClerkService {
  async updateUserRole(userId: string, role: string) {
    if (!(await clerk.users.getUser(userId))) throw new Error('User not found')
    const user = await clerk.users.updateUserMetadata(userId, {
      publicMetadata: {
        role
      }
    })
    return user
  }

  getUser(id: string) {
    return clerk.users.getUser(id)
  }

  getUsers() {
    return clerk.users.getUserList()
  }
}
