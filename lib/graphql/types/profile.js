"use strict";

import profileModel from "../../models/profile";
import composeWithMongoose from "graphql-compose-mongoose";
import userTypeConverter from "./user";
import messageTypeConverter from "./message";
import preferenceTypeConverter from "./preference";
import friendRequestTypeConverter from "./friendrequest";

const profileTypeConverter = composeWithMongoose(profileModel, {});

profileTypeConverter.addRelation("user", () => ({
    resolver: userTypeConverter.get("$findById"),
    args: {
        _id: (source) => source.user_id
    },
    projection: {user_id: 1}
}));

profileTypeConverter.addRelation("messagesFrom", () => ({
    resolver: messageTypeConverter.get("$connection"),
    args: {
        filter: (source) => ({
            from_id: source.id
        })
    },
    projection: {id: 1}
}));

profileTypeConverter.addRelation("messagesTo", () => ({
    resolver: messageTypeConverter.get("$connection"),
    args: {
        filter: (source) => ({
            to_id: source.id
        })
    },
    projection: {id: 1}
}));

profileTypeConverter.addRelation("preference", () => ({
    resolver: preferenceTypeConverter.get("$findOne"),
    args: {
        filter: (source) => ({
            profile_id: source.id
        })
    },
    projection: {id: 1}
}));

profileTypeConverter.addRelation("friends", () => ({
    resolver: profileTypeConverter.get("$findByIds"),
    args: {
        _ids: (source) => source.friends_ids,
    },
    projection: {friends_ids: 1}
}));

profileTypeConverter.addRelation("friendRequestsFrom", () => ({
    resolver: friendRequestTypeConverter.get("$connection"),
    args: {
        filter: (source) => ({
            from_id: source.id
        })
    },
    projection: {id: 1}
}));

profileTypeConverter.addRelation("friendRequestsTo", () => ({
    resolver: friendRequestTypeConverter.get("$connection"),
    args: {
        filter: (source) => ({
            to_id: source.id
        })
    },
    projection: {id: 1}
}));

export default profileTypeConverter;