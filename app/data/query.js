const { userQueries } = require('./user/user.schema');
const { todoQueries } = require('./todo/todo.schema');

const Query = `
    type Query {
        ${userQueries}
        ${todoQueries}
    }
`;

module.exports = Query