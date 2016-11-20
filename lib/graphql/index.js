"use strict";

import {GQC} from "graphql-compose";
import userTypeConverter from "./types/user";
import profileTypeConverter from "./types/profile";
import preferenceTypeConverter from "./types/preference";
import messageTypeConverter from "./types/message";
import friendRequestTypeConverter from "./types/friendrequest";

GQC.rootQuery().addFields({
    user: userTypeConverter.getResolver("findById"),
    users: userTypeConverter.getResolver("findMany"),
    profile: profileTypeConverter.getResolver("findById"),
    profiles: profileTypeConverter.getResolver("findMany"),
    preference: preferenceTypeConverter.getResolver("findById"),
    preferences: preferenceTypeConverter.getResolver("findMany"),
    message: messageTypeConverter.getResolver("findById"),
    messages: messageTypeConverter.getResolver("findMany")
});

GQC.rootMutation().addFields({
    createUser: userTypeConverter.getResolver("createOne"),
    updateUser: userTypeConverter.getResolver("updateById"),
    removeUser: userTypeConverter.getResolver("removeById"),
    createProfile: profileTypeConverter.getResolver("createOne"),
    updateProfile: profileTypeConverter.getResolver("updateById"),
    removeProfile: profileTypeConverter.getResolver("removeById"),
    createPreference: preferenceTypeConverter.getResolver("createOne"),
    updatePreference: preferenceTypeConverter.getResolver("updateById"),
    removePreference: preferenceTypeConverter.getResolver("removeById"),
    createMessage: messageTypeConverter.getResolver("createOne"),
    updateMessage: messageTypeConverter.getResolver("updateById"),
    removeMessage: messageTypeConverter.getResolver("removeById"),
    createFriendRequest: friendRequestTypeConverter.getResolver("createOne"),
    updateFriendRequest: friendRequestTypeConverter.getResolver("updateById"),
    removeFriendRequest: friendRequestTypeConverter.getResolver("removeById"),
});

export default GQC.buildSchema();
