var { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Post {
        id: ID
        title: String
        image: String
        description: String
        author: String
    }
    type Query {
        post(id: ID!): Post
        posts: [Post]
    }
    type Mutation {
        createPost(title: String!, image: String!, description: String!, author: String!): Post
    }
`);

module.exports = schema;