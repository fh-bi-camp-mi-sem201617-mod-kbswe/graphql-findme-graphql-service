"use strict";

import express from "express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import {json} from "body-parser";
import User from "./models/user";
import Profile from "./models/profile";
import composeWithMongoose from "graphql-compose-mongoose";
import {GQC} from "graphql-compose";

const app = express();
const UserTC = composeWithMongoose(User, {});
const ProfileTC = composeWithMongoose(Profile, {});

ProfileTC.addRelation("usertest", () => ({
    resolver: UserTC.getResolver("findById"),
    args: {
        _id: (source) => source.user
    },
    projection: {user: 1}
}));

GQC.rootQuery().addFields({
    user: UserTC.getResolver("findById"),
    users: UserTC.getResolver("findMany"),
    profile: ProfileTC.getResolver("findById"),
    profiles: ProfileTC.getResolver("findMany"),
});

const schema = GQC.buildSchema();

app.use(json());
app.use("/graphql", graphqlHTTP(req => ({
    schema,
    graphiql: true,
    pretty: true
})));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/findme");

const server = app.listen(8080, () => {
    console.log("Listening at port", server.address().port);
});
