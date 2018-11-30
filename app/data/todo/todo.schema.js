const todoTypes = `
    # todo definition type
    type Todo {
        id: Int!
        text: String!
    }
`;

const todoQueries = `
    allTodos: [Todo]
`;

const todoMutations = `
    createTodo (text: String!): Todo
`;

module.exports = {
  todoTypes,
  todoQueries,
  todoMutations
}
