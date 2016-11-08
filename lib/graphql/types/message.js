"use strict";

import messageModel from "../../models/message";
import composeWithMongoose from "graphql-compose-mongoose";
import profileTypeConverter from "./profile";

const messageTypeConverter = composeWithMongoose(messageModel, {});

messageTypeConverter.addRelation("from", () => ({
    resolver: profileTypeConverter.get("$findById"),
    args: {
        _id: (source) => source.from_id
    },
    projection: {from_id: 1}
}));

messageTypeConverter.addRelation("to", () => ({
    resolver: profileTypeConverter.get("$findById"),
    args: {
        _id: (source) => source.to_id
    },
    projection: {to_id: 1}
}));

export default messageTypeConverter;