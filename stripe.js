import {Meteor} from 'meteor/meteor'
import stripe from 'stripe'

export default stripe(Meteor.settings.stripeSecretKey)
