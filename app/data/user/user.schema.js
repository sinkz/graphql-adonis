const userTypes = `
    # User definition type
    type User {
        id: Int!
        username: String!
        email: String!
        created_at: String
    }

    type UserLoggedIn {
        id: Int!
        username: String!
        email: String!
        created_at: String
        token: String
    }
`;
const userQueries = `
    allUsers: [User]
`;

const userMutations = `
    login (email: String!, password: String!): UserLoggedIn
    createUser (username: String!, email: String!, password: String!): User
`;

module.exports = {
  userTypes,
  userQueries,
  userMutations
}
