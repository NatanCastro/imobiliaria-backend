import { users } from '@clerk/clerk-sdk-node'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ClerkService {
  async updateUserRole(userId: string, role: string) {
    if (!users.getUser(userId)) throw new Error('User not found')
    const user = await users.updateUserMetadata(userId, {
      publicMetadata: {
        role
      }
    })
    return user
  }
}
