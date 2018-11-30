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
        async login(_, { email, password }, { auth }) {
            const user = await User.findBy('email', email)
            const { token } = await auth.attempt(email, password)
            user.token = token;
            return user
        },
        async createUser(_, { username, email, password }) {
            return await User.create({ username, email, password })
        },
    },
}

module.exports = userResolver;