const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: String,
    date: String,
    time: String,
    location: String,
    category: String,
    description: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Event", eventSchema);