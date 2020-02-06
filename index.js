const {
    ApolloServer
} = require('apollo-server');
const typeDefs = require('./src/plantas/schema.graphql');
const resolvers = require('./src/plantas/resolvers');
const plantasDS = require('./src/plantas/datasource');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        plantasDS: new plantasDS(),       
    })
});

server.listen().then(({
    url
}) => {
    console.log(`🚀 Server ready at ${url}`);
});