const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ShuttleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Shuttle = mongoose.model("shuttles", ShuttleSchema);
