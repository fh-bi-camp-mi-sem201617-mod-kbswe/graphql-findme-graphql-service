"use strict";

import friendRequestModel from "../../models/friendrequest";
import composeWithMongoose from "graphql-compose-mongoose";
import profileTypeConverter from "./profile";

const friendRequestTypeConverter = composeWithMongoose(friendRequestModel, {});

friendRequestTypeConverter.addRelation("from", () => ({
    resolver: profileTypeConverter.get("$findById"),
    args: {
        _id: (source) => source.from_id
    },
    projection: {from_id: 1}
}));

friendRequestTypeConverter.addRelation("to", () => ({
    resolver: profileTypeConverter.get("$findById"),
    args: {
        _id: (source) => source.to_id
    },
    projection: {to_id: 1}
}));

export default friendRequestTypeConverter;