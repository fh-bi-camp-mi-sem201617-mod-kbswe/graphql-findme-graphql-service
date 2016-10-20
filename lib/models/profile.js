"use strict";

import mongoose, {Schema} from "mongoose";

export default mongoose.model('Profile', new mongoose.Schema({
    aboutme: {type: String, description: "A user generated description of himself"},
    children: {type: Number, description: "The amount of children"},
    email: {type: String, required: true, description: "The email of the user"},
    eyecolor: {type: Number, description: "The eye color"},
    familystatus: {type: Number, description: "The current family status"},
    figure: {type: Number, description: "The figure"},
    firstname: {type: String, required: true, description: "The first name"},
    lastname: {type: String, required: true, description: "The last name"},
    profilepic: {type: String, description: "The link to the profile picture"},
    gender: {type: Number, required: true, description: "The gender"},
    birthday: {type: Date, description: "The birthday of the user"},
    privacy: {
        friends: {type: Number, description: "The setting for friends"},
        pictures: {type: Number, description: "The setting for pictures"}
    },
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
}));