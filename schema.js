const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Item {
    id: Int
    name: String
    description: String
    price: Float
    category: String
  }

  type Query {
    items: [Item]
    item(id: Int!): Item
    itemsByCategory(category: String!): [Item]
  }
`;

module.exports = typeDefs;
