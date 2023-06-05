import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class EncryptService {
  private readonly salt = 10

  async encrypt(password: string): Promise<string> {
    return bcrypt.hash(password, this.salt)
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}
