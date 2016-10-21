"use strict";

import mongoose from "mongoose";
import {getSchema} from "@risingstack/graffiti-mongoose";
import User from "./user";
import Profile from "./profile";
import Message from "./message";
import Preference from "./preference";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/findme");

export default getSchema([User, Profile, Message, Preference]);