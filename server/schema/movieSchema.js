"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showtimeSchema = new Schema({
    days : [String],
    times : [String]
});

const movieSchema = new Schema({

    title: {
        type : String,
        required : true
    },
    year: {
        type : String,
        required : true
    },
    rated : String,
    released: {
        type : Date,
        required : true
    },
    runtime : String,
    genre: {
        type : String,
        required : true
    },
    director: {        
        type : String,
        required : true},
    actors: {
        type : String,
        required : true
    },
    plot: {
        type : String,
        required : true
    },
    poster: {
        type : String,
        required : true
    },
    showtime : [showtimeSchema],
    trailer : String
    

});

module.exports = mongoose.model('Movie', movieSchema);