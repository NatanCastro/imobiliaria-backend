import { Module } from '@nestjs/common'
import { StripeService } from './stripe.service'
import StripeClient from 'stripe'

@Module({
  providers: [StripeService],
  exports: [
    StripeService,
    {
      provide: StripeClient,
      useValue: new StripeClient(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2022-11-15'
      })
    }
  ]
})
export class StripeModule {}
