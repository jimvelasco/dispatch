const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const TripSchema = new Schema({
  shuttlename: {
    type: String,
    required: true
  },
  driver: {
    type: String,
    required: true
  },
  guestname: {
    type: String,
    required: true
  },
  property: {
    type: String,
    required: true
  },
  roomnum: {
    type: String,
    required: true
  },
  pickuploc: {
    type: String,
    required: true
  },
  numpassengers: {
    type: String,
    required: true
  },
  pickuptime: {
    type: String,
    required: false
  },
  dropoffloc: {
    type: String,
    required: true
  },

  booktime: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Trip = mongoose.model("trips", TripSchema);
