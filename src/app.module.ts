import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { EncryptModule } from './encrypt/encrypt.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, EncryptModule]
})
export class AppModule {}
