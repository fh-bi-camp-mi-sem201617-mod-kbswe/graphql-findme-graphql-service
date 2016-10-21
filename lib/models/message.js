"use strict";

import mongoose, {Schema} from "mongoose";

export default mongoose.model("Message", new mongoose.Schema({
    from: {type: Schema.Types.ObjectId, ref: "Profile", description: "The sender of the message"},
    to: {type: Schema.Types.ObjectId, ref: "Profile", description: "The receiver of the message"},
    title: {type: String, required: true, description: "The title"},
    content: {type: String, required: true, description: "The content"},
    archivedFrom: {type: Boolean, required: true, description: "If the message was achieved by the sender"},
    archivedTo: {type: Boolean, required: true, description: "If the message was achieved by the receiver"},
    deletedFrom: {type: Boolean, required: true, description: "If the message was deleted by the sender"},
    deletedTo: {type: Boolean, required: true, description: "If the message was deleted by the receiver"}
}));