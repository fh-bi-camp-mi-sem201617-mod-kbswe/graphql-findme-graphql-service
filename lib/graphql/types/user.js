import {GraphQLID, GraphQLString, GraphQLInt} from "graphql/type/scalars";
import {GraphQLObjectType, GraphQLNonNull} from "graphql/type/definition";

export default new GraphQLObjectType({
    name: "User",
    fields: {
        _id: {type: new GraphQLNonNull(GraphQLID)},
        login: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        role: {type: new GraphQLNonNull(GraphQLInt)}
    }
});