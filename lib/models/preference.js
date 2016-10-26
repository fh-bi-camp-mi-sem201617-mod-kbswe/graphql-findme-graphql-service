"use strict";

import mongoose, {Schema} from "mongoose";

export default mongoose.model("Preference", new mongoose.Schema({
    profile: {type: Schema.Types.ObjectId, ref: "Profile"},
    gender: {type: Number},
    ageFrom: {type: Number},
    ageTo: {type: Number},
    haircolor: {type: Number},
    eyecolor: {type: Number},
    figure: {type: Number}
}));