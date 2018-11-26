'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash');
const Query = require('./query')
const Mutation = require('./mutation')


const { userTypes } = require('./user/user.schema')
const userResolver = require('./user/user.resolver')


// Define our schema using the GraphQL schema language
const typeDefs = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`
const resolvers = merge(
  userResolver,
)

module.exports = makeExecutableSchema({ typeDefs: [typeDefs, Query, Mutation, userTypes], resolvers })
