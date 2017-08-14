var mongoose = require('mongoose');
var express = require('express');
var sliderSchema = require('./slider');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

// Parameters: model name, schema, collection name
var Slider = mongoose.model('Slider', sliderSchema, 'sliders');

// var slider = new Slider({
//     backgroundImage: '/images/community.jpg',
//     caption: {
//         title: 'Strong Community',
//         description: 'Build an interactive and solid community driven by purpose, and united in achieving common goals.',
//         actionButton: {
//             shouldUse: false,
//             text: '',
//             colorType: '',
//             sref: ''
//         },
//         rgbaColor: 'rgba(0, 39, 150, 0.5)'
//     },
//     order: 1
// });
//
// slider.save(function(error){
//     if (error) {
//         console.log(error);
//         process.exit(1);
//     }
//     else {
//         console.log('sucess!');
//     }
// });

var app = express();

// Serve static files
app.use(express.static('assets'));

/**
 * CLIENT-SIDE
 */
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/manage-slider', function(req, res){
    res.sendFile(__dirname + '/views/manageSlider.html');
});

/**
 * SERVER-SIDE
 */
app.route('/api/sliders')
    .get(function(req, res){
        // Get all sliders
        Slider.find(function(error, docs){
            if(error) return(error);

            res.send({sliders: docs});
        });
    })
    .post(function(req, res){

    })
    .put(function(req, res){

    })
    .delete(function(req, res){

    });

app.listen(9090);
console.log('Server listening on port 9090');
