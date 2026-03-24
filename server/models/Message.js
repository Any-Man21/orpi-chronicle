const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    text: { type: String, required: true },       // The Prayer/Dua
    loveLine: { type: String, required: true },   // The Romantic Line
    reflection: { type: String, required: true }  // The Short Thought
});

module.exports = mongoose.model('Message', MessageSchema);