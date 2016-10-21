"use strict";

import mongoose, {Schema} from "mongoose";

export default mongoose.model("Preference", new mongoose.Schema({
    profile: {type: Schema.Types.ObjectId, ref: "Profile", description: "The associated profile"},
    gender: {type: Number, description: "The desired gender"},
    ageFrom: {type: Number, description: "The minimum age"},
    ageTo: {type: Number, description: "The maximum age"},
    haircolor: {type: Number, description: "The desired hair color"},
    eyecolor: {type: Number, description: "The desired eye color"},
    figure: {type: Number, description: "The desired figure"}
}));