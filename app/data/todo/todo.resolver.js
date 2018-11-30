'use strict'
const Todo = use('App/Models/Todo')

const todoResolver = {
    Query: {
        async allTodos() {
            const todos = await Todo.all()
            return todos.toJSON()
        }
    },
    Mutation: {
        async createTodo(_, { text }, { auth }) {
            try {
                await auth.check()

                const user = await auth.getUser()
          
                // Add new post
                return await Todo.create({
                  user_id: user.id,
                  text,
                })
              } catch (error) {
                throw new Error('Missing or invalid jwt token')
              }
        },
    }
}

module.exports = todoResolver;