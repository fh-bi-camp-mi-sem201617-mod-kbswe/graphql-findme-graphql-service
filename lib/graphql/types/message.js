import {GraphQLObjectType, GraphQLNonNull} from "graphql/type/definition";
import {GraphQLID, GraphQLString, GraphQLBoolean} from "graphql/type/scalars";
import profileType from "./profile";
import Profile from "../../models/profile";

export default new GraphQLObjectType({
    name: "Message",
    fields: {
        _id: {type: new GraphQLNonNull(GraphQLID)},
        from: {
            type: new GraphQLNonNull(profileType), resolve(message){
                return Profile.findById(message.from);
            }
        },
        to: {
            type: new GraphQLNonNull(profileType), resolve(message){
                return Profile.findById(message.to);
            }
        },
        archivedFrom: {type: new GraphQLNonNull(GraphQLBoolean)},
        archivedTo: {type: new GraphQLNonNull(GraphQLBoolean)},
        deletedFrom: {type: new GraphQLNonNull(GraphQLBoolean)},
        deletedTo: {type: new GraphQLNonNull(GraphQLBoolean)},
        content: {type: new GraphQLNonNull(GraphQLString)}
    }
});