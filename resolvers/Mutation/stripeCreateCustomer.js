import stripe from '../../stripe'
import {Meteor} from 'meteor/meteor'

export default async function (root, {source}, context) {
  if (!context.userId) throw new Error('You need to be logged in to create a customer')

  const user = Meteor.users.findOne(context.userId)
  const email = user.emails[0].address

  if (user.services.stripe && user.services.stripe.customerId) throw new Error('User is already a stripe customer')

  const customer = await stripe.customers.create({
    source,
    email,
    metadata: {
      userId: user._id
    }
  })

  Meteor.users.update(user._id, {$set: {'services.stripe.customerId': customer.id}})

  return customer
}
