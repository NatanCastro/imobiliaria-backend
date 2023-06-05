import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { EncryptService } from 'src/encrypt/encrypt.service'

@Module({
  controllers: [UserController],
  providers: [UserService, EncryptService],
  exports: [UserService],
  imports: []
})
export class UserModule {}
