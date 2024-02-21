import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { RealStateModule } from './real-state/real-state.module'
import { CloudinaryModule } from './cloudinary/cloudinary.module'
import { ClerkModule } from './clerk/clerk.module'
import { UserModule } from './user/user.module'
import { StripeModule } from './stripe/stripe.module'
import { AuthModule } from './auth/auth.module'
import { EventEmitterModule } from '@nestjs/event-emitter'

@Module({
  imports: [
    EventEmitterModule.forRoot({ global: true }),
    PrismaModule,
    RealStateModule,
    CloudinaryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ClerkModule,
    UserModule,
    StripeModule,
    AuthModule
  ]
})
export class AppModule {}
