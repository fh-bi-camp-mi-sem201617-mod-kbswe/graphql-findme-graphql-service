import {GraphQLList} from "graphql";
import profileType from "../../types/profile";
import getProjection from "../../get-projection";
import ProfileModel from "../../../models/profile";

export default {
    type: new GraphQLList(profileType),
    args: {},
    resolve (root, params, ctx, options) {
        return ProfileModel
            .find({})
            .select(getProjection(options.fieldASTs[0]))
            .exec();
    }
};
