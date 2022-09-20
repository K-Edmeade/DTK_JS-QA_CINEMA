"use strict";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const movie = require("./routes/movieRoutes.js");
const discussion = require("./routes/discussionRoutes.js");
const booking = require("./routes/bookingRoutes.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/cinema", { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log("Can't connect " + error);
    } else {
        console.log("Connected to cinema db");
    }
})

app.use("/movie", movie);
app.use("/discussion", discussion);
app.use("/booking", booking);



const server = app.listen(5015, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server link: http://localhost:${server.address().port}`);
    }
})
module.exports = server;