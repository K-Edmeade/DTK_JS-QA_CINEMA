"use strict";

const router = require('express').Router();
const Discussion = require('../schema/discussionSchema.js');

router.get("/getAll", (req, res) => {


    Discussion.find({}, (err, result) => {
        if (err)
            res.status(500).send(err);

        else if (!result.length)
            res.status(404).send(`No entries found in the database`);
        else
            res.status(200).send(result);
    });

});


router.post("/create", (req, res) => {
    const booking = new Discussion(req.body);
    booking.save().then((result) => {
        res.status(201).send(`Comment by ${result.name} added`)
    });
});

module.exports = router;