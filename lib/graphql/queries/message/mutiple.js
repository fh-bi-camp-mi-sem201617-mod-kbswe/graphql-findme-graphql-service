import {GraphQLList} from "graphql";
import messageType from "../../types/message";
import getProjection from "../../get-projection";
import Message from "../../../models/message";

export default {
    type: new GraphQLList(messageType),
    args: {},
    resolve (root, params, ctx, options) {
        return Message
            .find({})
            .select(getProjection(options.fieldASTs[0]))
            .exec();
    }
};
