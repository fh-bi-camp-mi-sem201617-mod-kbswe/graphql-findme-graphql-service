"use strict";

import express from "express";
import cors from "cors";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import {json} from "body-parser";
import schema from "./graphql";

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || "27017";
const DB_NAME = process.env.DB_NAME || "findme";

const app = express();

app.use(json());
app.use(cors());

app.use("/graphql", graphqlHTTP(req => ({
    schema,
    graphiql: true,
    pretty: true
})));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://" + DB_HOST + ":" + DB_PORT + "/" + DB_NAME);

const server = app.listen(8080, () => {
    console.log("Listening at port", server.address().port);
});
