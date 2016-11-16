"use strict";

import mongoose, {Schema} from "mongoose";

export default mongoose.model("FriendRequest", new Schema({
    from_id: {type: Schema.Types.ObjectId, ref: "Profile"},
    to_id: {type: Schema.Types.ObjectId, ref: "Profile"}
}));
