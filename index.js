const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// configuration express app
const app = express();

// connect to mongoodb
mongoose.connect('mongodb://localhost/taraminego');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialisation des routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
// console.log(err);
res.status(422).send({error:err.message});
});

// app.get('/api',function(req,res){
// console.log('GET request');
// res.send({name: 'emine'});
// });


// ecouter la demande / listen for requests
app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
});