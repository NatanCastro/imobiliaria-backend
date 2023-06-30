import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { EncryptService } from 'src/encrypt/encrypt.service'
import { PassportModule } from '@nestjs/passport'

@Module({
  controllers: [UserController],
  providers: [UserService, EncryptService, PassportModule],
  exports: [UserService]
})
export class UserModule {}
