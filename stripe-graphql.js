import './checkNpm'
import {loadSchema} from 'graphql-loader'
import typeDefs from './schema'
import resolvers from './resolvers'
import stripe from './stripe'
import isActive from './resolvers/Types/StripeCustomer/isActive'
import {Meteor} from 'meteor/meteor'

loadSchema({typeDefs, resolvers})

export const userHasCard = async function (userId) {
  const user = Meteor.users.findOne(userId, {fields: {'services.stripe.customerId': 1}})
  if (!user) return false
  if (!user.services.stripe) return false
  const customer = await stripe.customers.retrieve(user.services.stripe.customerId)
  if (customer.deleted) return false
  return isActive(customer)
}

export {
  stripe
}
