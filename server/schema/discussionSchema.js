"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussionSchema = new Schema({

    name: {
        type : String,
        required : true
    },
    comment: {
        type : String,
        required : true
    },
    movie: {
        type : String,
        required : true
    },
    rating: {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('Discussion', discussionSchema);