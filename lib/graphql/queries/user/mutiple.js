import {GraphQLList} from "graphql";
import userType from "../../types/user";
import getProjection from "../../get-projection";
import User from "../../../models/user";

export default {
    type: new GraphQLList(userType),
    args: {},
    resolve (root, params, ctx, options) {
        return User
            .find()
            .select(getProjection(options.fieldASTs[0]))
            .exec();
    }
};
