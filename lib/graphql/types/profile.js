"use strict";

import {GraphQLObjectType, GraphQLNonNull, GraphQLList} from "graphql/type/definition";
import {GraphQLID, GraphQLString, GraphQLInt} from "graphql/type/scalars";
import GraphQLDate from "graphql-date";
import privacyType from "./privacy";
import userType from "./user";
import User from "../../models/user";
import messageType from "./message";
import Message from "../../models/message";
import preferenceType from "./preference";
import Preference from "../../models/preference";

export default new GraphQLObjectType({
    name: "Profile",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLID)},
        aboutme: {type: GraphQLString},
        children: {type: GraphQLInt},
        email: {type: new GraphQLNonNull(GraphQLString)},
        eyecolor: {type: GraphQLInt},
        familystatus: {type: GraphQLInt},
        figure: {type: GraphQLInt},
        firstname: {type: new GraphQLNonNull(GraphQLString)},
        lastname: {type: new GraphQLNonNull(GraphQLString)},
        profilepic: {type: GraphQLString},
        gender: {type: new GraphQLNonNull(GraphQLInt)},
        birthday: {type: GraphQLDate},
        privacy: {
            type: privacyType, resolve(profile){
                return {
                    friends: profile.privacy.friends,
                    pictures: profile.privacy.pictures
                };
            }
        },
        user: {
            type: userType, resolve(profile){
                return User.findById(profile.user);
            }
        },
        messagesFrom: {
            type: new GraphQLList(messageType), resolve(profile){
                return Message.find({from: profile.id});
            }
        },
        messagesTo: {
            type: new GraphQLList(messageType), resolve(profile){
                return Message.find({to: profile.id});
            }
        },
        preference: {
            type: preferenceType, resolve(profile){
                return Preference.findById(profile.id)
            }
        }
    })
});