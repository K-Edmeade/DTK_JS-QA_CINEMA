"use strict";

const router = require('express').Router();
const Booking = require('../schema/bookingSchema.js');


router.get("/get/:id", (req, res) => {

    Booking.findById(req.params.id, (err, result) => {
        console.log(err);
        if (err)
            res.status(500).send(err);
        else if (!result)
            res.status(404).send(`No entry with ID ${req.params.id} found`);
        else
            res.status(200).send(result);
    });
});

router.post("/create", (req, res) => {
    const booking = new Booking(req.body);
    booking.save().then((result) => {
        res.status(201).send(result)
    });
});


module.exports = router;