import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { RealStateModule } from './real-state/real-state.module'
import { CloudinaryModule } from './cloudinary/cloudinary.module'
import { ClerkModule } from './clerk/clerk.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, RealStateModule, CloudinaryModule, ConfigModule.forRoot({ isGlobal: true }), ClerkModule, UserModule]
})
export class AppModule {}
