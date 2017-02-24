import stripe from '../../../stripe'
import {Meteor} from 'meteor/meteor'

export default async function ({_id}, params, context) {
  if (_id !== context.userId) throw new Error('Only user can view their customer')

  const user = Meteor.users.findOne(_id, {fields: {'services.stripe.customerId': 1}})
  if (!user.services.stripe) return
  const customer = await stripe.customers.retrieve(user.services.stripe.customerId)

  if (customer.deleted) return null

  return customer
}
