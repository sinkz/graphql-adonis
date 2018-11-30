const { userMutations } = require('./user/user.schema');
const { todoMutations } = require('./todo/todo.schema');

const Mutation = `
    type Mutation {
        ${userMutations}
        ${todoMutations}
    }
`;

module.exports = Mutation