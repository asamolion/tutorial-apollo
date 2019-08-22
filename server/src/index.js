const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
