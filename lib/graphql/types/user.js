import {GraphQLID, GraphQLString, GraphQLInt} from "graphql/type/scalars";
import {GraphQLObjectType, GraphQLNonNull} from "graphql/type/definition";
import profileType from "./profile";
import Profile from "../../models/profile";

const userType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLID)},
        login: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        role: {type: new GraphQLNonNull(GraphQLInt)},
        profile: {
            type: profileType, resolve(user){
                return Profile.findById(user.id);
            }
        }
    })
});

export default userType;