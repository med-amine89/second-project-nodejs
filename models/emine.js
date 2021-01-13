const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//   create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// create emine Schema & model
const emineSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    lastname: {
        type: String
    },
    age: {
        type: Number
    },
    geometry: GeoSchema

    // add in geo location
});

const Emine = mongoose.model('emine', emineSchema);

module.exports = Emine;