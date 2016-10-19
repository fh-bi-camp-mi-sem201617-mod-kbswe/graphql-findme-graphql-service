import express from "express";
import mongoose from "mongoose";
import User from "./models/user";
import {json} from "body-parser";
import graffiti from "@risingstack/graffiti";
import {getSchema} from "@risingstack/graffiti-mongoose";

const app = express();

app.use(json());
app.use(graffiti.express({
    schema: getSchema([User]),
    context: {}
}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/findme');

app.listen(8080,);
