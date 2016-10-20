"use strict";

import mongoose, {Schema} from "mongoose";

export default mongoose.model("User", new mongoose.Schema({
    login: {type: String, required: true, description: "The name used for login"},
    password: {type: String, required: true, description: "The password"},
    role: {type: Number, required: true, description: "The role this user has"},
    profile: {type: Schema.Types.ObjectId, ref: "Profile"}
}));