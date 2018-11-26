'use strict'
const User = use('App/Models/User')

const userResolver = {
    Query: {
        async allUsers() {
          const users = await User.all()
          return users.toJSON()
        },
    },
    Mutation: {
        async createUser(_, { username, email, password }) {
          return await User.create({ username, email, password })
        },
    },
}

module.exports = userResolver;