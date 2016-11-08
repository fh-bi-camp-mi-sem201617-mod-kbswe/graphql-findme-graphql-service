import {GQC} from "graphql-compose";
import userTypeConverter from "./types/user";
import profileTypeConverter from "./types/profile";
import preferenceTypeConverter from "./types/preference";
import messageTypeConverter from "./types/message";

GQC.rootQuery().addFields({
    user: userTypeConverter.getResolver("findById"),
    users: userTypeConverter.getResolver("findMany"),
    profile: profileTypeConverter.getResolver("findById"),
    profiles: profileTypeConverter.getResolver("findMany"),
    preference: preferenceTypeConverter.getResolver("findById"),
    preferences: preferenceTypeConverter.getResolver("findMany"),
    message: messageTypeConverter.getResolver("findById"),
    messages: messageTypeConverter.getResolver("findMany"),
});

export default GQC.buildSchema();