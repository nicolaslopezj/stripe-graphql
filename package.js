/* global Package */

Package.describe({
  name: 'orionsoft:stripe-graphql',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Stripe for Apollo',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/orionsoft/stripe-graphql',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.4.2.3')
  api.use('ecmascript')
  api.use('orionsoft:graphql-compiler@0.0.2')
  api.use('tmeasday:check-npm-versions@0.3.1')
  api.mainModule('stripe-graphql.js')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('orionsoft:stripe-graphql')
  api.mainModule('stripe-graphql-tests.js')
})
