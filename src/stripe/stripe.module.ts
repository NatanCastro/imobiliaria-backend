import { Module } from '@nestjs/common'
import { StripeService } from './stripe.service'
import { RealStateCreatedListener } from './listeners/real-state-created.listener'

@Module({
  providers: [StripeService, RealStateCreatedListener],
  exports: [StripeService]
})
export class StripeModule {}
