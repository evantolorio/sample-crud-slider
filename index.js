var mongoose = require('mongoose');
var express = require('express');
var sliderSchema = require('./slider');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

// Parameters: model name, schema, collection name
var Slider = mongoose.model('Slider', sliderSchema, 'sliders');

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
        // Create new slider
        var slider = new Slider(req.body);
        slider.save(function(error){
            if(error) console.log(error);

            res.send('Slider saved');
        });
    })
    .put(function(req, res){
        // Update a slider
        var id = req.params.id;

		Slider.findByIdAndUpdate(id, req.body, function(error){
			if(error) console.log(error);

			res.send("Slider updated");
		});
    })
    .delete(function(req, res){
        // Delete a slider
        var id = req.params.id;

		Slider.findByIdAndRemove(id, function(error, result){
			if(error) return (error);
			else if (result === null) return res.status(404).send('Slider not found!');

			res.send("Slider deleted.");
		});

    });

app.listen(9090);
console.log('Server listening on port 9090');
