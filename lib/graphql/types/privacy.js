import {GraphQLObjectType, GraphQLNonNull} from "graphql/type/definition";
import {GraphQLInt} from "graphql/type/scalars";

export default new GraphQLObjectType({
    name: "Privacy",
    fields: {
        friends: {type: new GraphQLNonNull(GraphQLInt)},
        pictures: {type: new GraphQLNonNull(GraphQLInt)}
    }
});