import {GraphQLID, GraphQLNonNull} from "graphql";
import userType from "../../types/user";
import getProjection from "../../get-projection";
import UserModel from "../../../models/user";

export default {
    type: userType,
    args: {
        id: {
            name: "id",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (params, options) {
        return UserModel
            .findById(params.id)
            .select(getProjection(options.fieldASTs[0]))
            .exec();
    }
};
