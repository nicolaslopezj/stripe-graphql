import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions'

checkNpmVersions({
  'graphql-loader': '1.2.x',
  'stripe': '4.15.x'
}, 'orionsoft:stripe-graphql')
