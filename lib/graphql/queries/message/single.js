import {GraphQLID, GraphQLNonNull} from "graphql";
import messageType from "../../types/message";
import getProjection from "../../get-projection";
import Message from "../../../models/message";

export default {
    type: messageType,
    args: {
        id: {
            name: "id",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, ctx, options) {
        return Message
            .findById(params.id)
            .select(getProjection(options.fieldASTs[0]))
            .exec();
    }
};
