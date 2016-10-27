import {GraphQLObjectType} from "graphql/type/definition";
import {GraphQLInt} from "graphql/type/scalars";
import profileType from "./profile";
import Profile from "../../models/profile";

export default new GraphQLObjectType({
    name: "Preference",
    fields: () => ({
        profile: {
            type: profileType, resolve(preference){
                return Profile.findById(preference.profile)
            }
        },
        gender: {type: GraphQLInt},
        ageFrom: {type: GraphQLInt},
        agoTo: {type: GraphQLInt},
        haircolor: {type: GraphQLInt},
        eyecolor: {type: GraphQLInt},
        figure: {type: GraphQLInt}
    })
});