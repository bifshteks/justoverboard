 // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================

    mongoose.connect('mongodb://justjosanych:letmegetintomydb@justoverboard-shard-00-00-44qd7.mongodb.net:27017,justoverboard-shard-00-01-44qd7.mongodb.net:27017,justoverboard-shard-00-02-44qd7.mongodb.net:27017/test?ssl=true&replicaSet=justoverboard-shard-0&authSource=admin');     // connect to mongoDB database on modulus.io

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());



    // define model =================
    var trackTypeSchema = new mongoose.Schema({
        tracktype: String,
        file: { mime: String, bin: Buffer },
        cost: { type: Number, required: true, min: 0},
    })

    var stackCostSchema = new mongoose.Schema({
        stackTitle: String,
        cost: { type: Number, required: true, min: 0},
    })



    var trackSchema = new mongoose.Schema({
        name: { type: String, required: true},
        duration: { type: Number, required: true, min: 0},
        bpm: { type: Number, required: true, min: 0},
        ganre: [String],
        tags: [String],
        files: [trackTypeSchema],
            

        stack: {
            mp3wavCost: Number,
            wavseqCost: Number,
            mp3wavseqCost: Number,
        }
    })

    var Track = mongoose.model('Track', trackSchema, 'Tracks')

    // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/tracks', function(req, res) {

        // use mongoose to get all todos in the database
        Track.find(function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos); // return all todos in JSON format
        });
    });

    // create todo and send back all todos after creation
    app.post('/api/tracks', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Track.create({
            text : req.body.text,
            done : false
        }, function(err, track) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Track.find(function(err, tracks) {
                if (err)
                    res.send(err)
                res.json(tracks);
            });
        });

    });

    // delete a todo
    app.delete('/api/tracks/:track_id', function(req, res) {
        Track.remove({
            _id : req.params.track_id
        }, function(err, track) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Track.find(function(err, tracks) {
                if (err)
                    res.send(err)
                res.json(tracks);
            });
        });
    });


    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/angularjs/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");



    module.exports = app;