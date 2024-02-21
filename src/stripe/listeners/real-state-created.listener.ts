import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { RealStateCreatedEvent } from 'src/real-state/events/real-state-created.event'
import { StripeService } from '../stripe.service'

@Injectable()
export class RealStateCreatedListener {
  constructor(private readonly stripeService: StripeService) {}
  @OnEvent('realState.created')
  async handleRealStateCreatedEvent(event: RealStateCreatedEvent) {
    await this.stripeService.addProduct(event)
    await this.stripeService.createPaymentLink(event.id)
  }
}
