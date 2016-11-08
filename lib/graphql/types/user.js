import userModel from "../../models/user";
import composeWithMongoose from "graphql-compose-mongoose";
import profileTypeConverter from "./profile";

const userTypeConverter = composeWithMongoose(userModel, {});

userTypeConverter.addRelation("profile", () => ({
    resolver: profileTypeConverter.get('$findOne'),
    args: {
        filter: (source) => ({
            user_id: source.id
        })
    },
    projection: {id: 1}
}));

export default userTypeConverter;