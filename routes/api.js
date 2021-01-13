const express = require('express');
const router = express.Router();
const Emine = require('../models/emine');

// get a list of emine from the db
router.get('/emines', function (req, res, next) {
    // res.send({ type: 'GET' });
    Emine.geoNear(
        { type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
        { maxDistance: 100000, spherical: true }
    ).then(function (emines) {
        res.send(emines);
    });
});

// add a new emine to the db
router.post('/emines', function (req, res, next) {
    Emine.create(req.body).then(function (emine) {
        res.send(emine);
    }).catch(next);
});

// update a new emine in the db
router.put('/emines/:id', function (req, res, next) {
    Emine.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (emine) {
        res.send(emine);
    });

});

// delete a emine from the db
router.delete('/emines/:id', function (req, res, next) {
    Emine.findByIdAndRemove({ _id: req.params.id }).then(function (emine) {
        res.send(emine);
    });
    // res.send({ type: 'DELETE' });
});

module.exports = router;