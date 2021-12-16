// Här skapar du hur en post ser ut, i API.js använder du dessa variabler
// (fname, email, content) Du kan sätta upp vad du vill i dessa. 

const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({

    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model("Post", PostSchema)