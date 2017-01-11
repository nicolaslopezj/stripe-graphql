// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by stripe-graphql.js.
import { name as packageName } from "meteor/stripe-graphql";

// Write your tests here!
// Here is an example.
Tinytest.add('stripe-graphql - example', function (test) {
  test.equal(packageName, "stripe-graphql");
});
