const menuData = require("./data");

const resolvers = {
  Query: {
    items: () => menuData,
    item: (_, { id }) => menuData.find((item) => item.id === id),
    itemsByCategory: (_, { category }) =>
      menuData.filter((item) => item.category === category),
  },
};

module.exports = resolvers;
