'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash');
const Query = require('./query')
const Mutation = require('./mutation')


const { userTypes } = require('./user/user.schema')
const { todoTypes } = require('./todo/todo.schema')
const userResolver = require('./user/user.resolver')
const todoResolver = require('./todo/todo.resolver')


// Define our schema using the GraphQL schema language
const typeDefs = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`
const resolvers = merge(
  userResolver,
  todoResolver
)

module.exports = makeExecutableSchema({ typeDefs: [typeDefs, Query, Mutation, userTypes, todoTypes], resolvers })
