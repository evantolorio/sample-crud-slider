var mongoose = require('mongoose');
var express = require('express');
var sliderSchema = require('./slider');

mongoose.connect('mongodb://localhost:27017/test');

var Slider = mongoose.model('Slider', schema, 'sliders');

var slider = new Slider({

});
