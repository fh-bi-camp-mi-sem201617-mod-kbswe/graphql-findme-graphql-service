"use strict";

import mongoose, {Schema} from "mongoose";

export default mongoose.model("Profile", new Schema({
    aboutme: {type: String},
    children: {type: Number},
    email: {type: String, required: true},
    eyecolor: {type: Number},
    familystatus: {type: Number},
    figure: {type: Number},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    profilepic: {type: String},
    gender: {type: Number, required: true},
    birthday: {type: Date},
    privacy: {
        friends: {type: Number},
        pictures: {type: Number}
    },
    user_id: {type: Schema.Types.ObjectId, ref: "User", required: true},
    friends_ids: [{type: Schema.Types.ObjectId, ref: "Profile"}]
}));
