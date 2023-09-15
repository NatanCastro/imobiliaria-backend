import { Module } from '@nestjs/common'
import { RealStateService } from './real-state.service'
import { RealStateController } from './real-state.controller'
import { CloudinaryService } from '../cloudinary/cloudinary.service'
import { StripeService } from 'src/stripe/stripe.service'

@Module({
  controllers: [RealStateController],
  providers: [RealStateService, CloudinaryService, StripeService]
})
export class RealStateModule {}
