const request = require("supertest");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("../schema");
const resolvers = require("../resolvers");
const menuData = require("../data");

const startTestServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  return app;
};

describe("GraphQL API", () => {
  let app;
  beforeAll(async () => {
    app = await startTestServer();
  });

  it("fetches all items", async () => {
    const res = await request(app).post("/graphql").send({
      query: `{ items { id name description price category } }`,
    });
    expect(res.status).toBe(200);
    expect(res.body.data.items).toEqual(menuData);
  });

  it("fetches a single item by id", async () => {
    const res = await request(app).post("/graphql").send({
      query: `{ item(id: 1) { id name description price category } }`,
    });
    expect(res.status).toBe(200);
    expect(res.body.data.item).toEqual(menuData.find((i) => i.id === 1));
  });

  it("fetches items by category", async () => {
    const res = await request(app).post("/graphql").send({
      query: `{ itemsByCategory(category: "APPETIZERS") { id name description price category } }`,
    });
    expect(res.status).toBe(200);
    expect(res.body.data.itemsByCategory).toEqual(
      menuData.filter((i) => i.category === "APPETIZERS")
    );
  });
});
