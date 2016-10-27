import {GraphQLID, GraphQLNonNull} from "graphql";
import preferenceType from "../../types/preference";
import getProjection from "../../get-projection";
import Preference from "../../../models/preference";

export default {
    type: preferenceType,
    args: {
        id: {
            name: "id",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, ctx, options) {
        return Preference
            .findById(params.id)
            .select(getProjection(options.fieldASTs[0]))
            .exec();
    }
};
