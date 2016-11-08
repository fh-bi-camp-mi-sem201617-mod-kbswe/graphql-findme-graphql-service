"use strict";

import preferenceModel from "../../models/preference";
import composeWithMongoose from "graphql-compose-mongoose";
import profileTypeConverter from "./profile";

const preferenceTypeConverter = composeWithMongoose(preferenceModel, {});

preferenceTypeConverter.addRelation("profile", () => ({
    resolver: profileTypeConverter.get("$findById"),
    args: {
        _id: (source) => source.profile_id
    },
    projection: {profile_id: 1}
}));

export default preferenceTypeConverter;