var mongoose = require('mongoose');
var express = require('express');
var sliderSchema = require('./slider');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

// Parameters: model name, schema, collection name
var Slider = mongoose.model('Slider', sliderSchema, 'sliders');

var slider = new Slider({
    backgroundImage: '/assets/images/community.jpg',
    caption: {
        title: 'Strong Community',
        description: 'Build an interactive and solid community driven by purpose, and united in achieving common goals.',
        actionButton: {
            shouldUse: false,
            text: '',
            color: ''
        },
        background: {
            color: 'blue',
            opacity: '0.7'
        }
    },
    order: 1
});

slider.save(function(error){
    if (error) {
        console.log(error);
        process.exit(1);
    }
    else {
        console.log('sucess!');
    }
});
