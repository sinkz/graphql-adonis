const { userQueries } = require('./user/user.schema');

const Query = `
    type Query {
        ${userQueries}
    }
`;

module.exports = Query