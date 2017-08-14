var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    backgroundImage: String,
    caption: {
        title: String,
        description: String,
        actionButton: {
            shouldUse: Boolean,
            text: String,
            colorType: String,
            sref: String
        },
        rgbaColor: String
    },
    order: Number
});
