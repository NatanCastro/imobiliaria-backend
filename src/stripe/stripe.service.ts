import { Injectable } from '@nestjs/common'
import { stripe } from './stripe'

@Injectable()
export class StripeService {
  async addProduct({ id, name, price, images }: { id: string; name: string; price: number; images: string[] }) {
    const stripeProduct = await stripe.products.create({
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
    await stripe.products.update(id, {
      name,
      default_price: (price * 100).toString(),
      images: images
    })
  }

  async deleteProduct(id: string) {
    await stripe.products.del(id)
  }
}
