const schema = require("./schema.graphql")
const resolvers = {
    Query: {
        plantas(_, __, { dataSources }) {
            return dataSources.plantasDS.listar();
        },
        planta(_, {id}, { dataSources }){
            return dataSources.plantasDS.buscar(id);
        }
    },
};

module.exports = resolvers;