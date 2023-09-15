import { Injectable } from '@nestjs/common'
import StripeClient from 'stripe'

@Injectable()
export class StripeService {
  stripeClient: StripeClient
  constructor() {
    this.stripeClient = new StripeClient(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-08-16'
    })
  }

  async addProduct({ id, name, price, images }: { id: string; name: string; price: number; images: string[] }) {
    const stripeProduct = await this.stripeClient.products.create({
      id: id,
      name: name,
      metadata: {
        id: id
      },
      images: images,
      default_price_data: {
        currency: 'BRL',
        unit_amount: price * 100,
        recurring: {
          interval: 'month'
        }
      }
    })
    return stripeProduct.url
  }

  async updateProduct(id: string, { name, price, images }: { name: string; price: number; images: string[] }) {
    await this.stripeClient.products.update(id, {
      name,
      default_price: (price * 100).toString(),
      images: images
    })
  }

  async deleteProduct(id: string) {
    await this.stripeClient.products.update(id, {
      active: false
    })
    // await stripe.products.del(id)
  }

  async createPaymentLink(id: string) {
    const product = await this.stripeClient.products.retrieve(id)
    console.log(product)
    const { url } = await this.stripeClient.paymentLinks.create({
      line_items: [
        {
          price: product.default_price as string,
          quantity: 1
        }
      ]
    })
    return url
  }
}
