import {Meteor} from 'meteor/meteor'
import stripe from '../../stripe'
import getStripeCustomer from '../Types/User/stripeCustomer'
import getCards from '../Types/StripeCustomer/cards'

export default async function (root, {source}, context) {
  if (!context.userId) throw new Error('You need to be logged in to create a customer')
  const user = Meteor.users.findOne(context.userId)
  const customer = await getStripeCustomer(user, null, context)
  if (!customer) throw new Error('User is not a stripe customer')
  const oldCards = await getCards(customer, null, context)

  await stripe.customers.createSource(user.services.stripe.customerId, {source})

  for (const card of oldCards) {
    await stripe.customers.deleteCard(customer.id, card.id)
  }

  return getStripeCustomer(user, null, context)
}
