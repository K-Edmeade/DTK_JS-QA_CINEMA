"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    cardNumber : {
        type : Number,
        required : true
    },
    expiringDate : {
        type : String,
        required : true
    },
    cvv : {
        type : Number,
        required : true
    }
});

const movieBookingSchema = new Schema({
    movie : {
        type : String,
        required : true
    },
    day : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    }
});

const bookingSchema = new Schema({

    firstName: {
        type : String,
        required : true
    },
    lastName: {
        type : String,
        required : true
    },
    adultTickets: {
        type : Number,
        required : true
    },
    childrenTickets: {
        type : Number
    },
    concession: {
        type: Number
    },
    price: {
        type : Number,
        required : true
    },
    date: {
        type : Date,
        default: Date.now()
    },
    movieBooking: [movieBookingSchema],
    payment: [paymentSchema]
});

module.exports = mongoose.model('Booking', bookingSchema);