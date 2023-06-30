import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma.module'
import { EncryptModule } from './encrypt/encrypt.module'
import { RealStateModule } from './real-state/real-state.module'

@Module({
  imports: [UserModule, PrismaModule, EncryptModule, RealStateModule]
})
export class AppModule {}
