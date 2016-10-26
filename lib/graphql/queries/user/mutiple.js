import {GraphQLList} from "graphql";
import userType from "../../types/user";
import getProjection from "../../get-projection";
import UserModel from "../../../models/user";

export default {
    type: new GraphQLList(userType),
    args: {},
    resolve (options) {
        return UserModel
            .find()
            .select(getProjection(options.fieldASTs[0]))
            .exec();
    }
};
