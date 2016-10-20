"use strict";

import express from "express";
import {json} from "body-parser";
import graffiti from "@risingstack/graffiti";
import schema from "./models";

const app = express();

app.use(json());
app.use(graffiti.express({
    schema,
    graphiql: true
}));

const server = app.listen(8080, () => {
    console.log("Listening at port", server.address().port);
});
