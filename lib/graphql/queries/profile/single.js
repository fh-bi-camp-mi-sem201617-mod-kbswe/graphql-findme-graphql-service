import {GraphQLID, GraphQLNonNull} from "graphql";
import profileType from "../../types/profile";
import getProjection from "../../get-projection";
import ProfileModel from "../../../models/profile";

export default {
    type: profileType,
    args: {
        id: {
            name: "id",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, ctx, options) {
        return ProfileModel
            .findById(params.id)
            .select(getProjection(options.fieldASTs[0]))
            .exec();
    }
};