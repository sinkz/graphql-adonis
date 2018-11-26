const userTypes = `
    # User definition type
    type User {
        id: Int!
        username: String!
        email: String!
    }
`;
const userQueries = `
    allUsers: [User]
`;

const userMutations = `
    createUser (username: String!, email: String!, password: String!): User
`;

module.exports = {
  userTypes,
  userQueries,
  userMutations
}
