import {GraphQLList} from "graphql";
import preferenceType from "../../types/preference";
import getProjection from "../../get-projection";
import Preference from "../../../models/preference";

export default {
    type: new GraphQLList(preferenceType),
    args: {},
    resolve (root, params, ctx, options) {
        return Preference
            .find({})
            .select(getProjection(options.fieldASTs[0]))
            .exec();
    }
};
