var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    backgroundImage: String,
    caption: {
        title: String,
        description: String,
        actionButton: {
            shouldUse: Boolean,
            text: String,
            color: String
        },
        background: {
            color: String,
            opacity: String
        }
    },
    order: Number
});
