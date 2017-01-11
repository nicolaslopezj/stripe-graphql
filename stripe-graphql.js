import './checkNpm'
import {loadSchema} from 'graphql-loader'
import typeDefs from './schema'
import resolvers from './resolvers'
import stripe from './stripe'

loadSchema({typeDefs, resolvers})

export {
  stripe
}
