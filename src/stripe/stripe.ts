import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_PUBLISHABLE_KEY, {
  apiVersion: '2022-11-15'
})
