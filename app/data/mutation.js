const { userMutations } = require('./user/user.schema');

const Mutation = `
    type Mutation {
        ${userMutations}
    }
`;

module.exports = Mutation