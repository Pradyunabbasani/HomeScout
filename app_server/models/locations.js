const mongoose = require('mongoose');

// Define the schema for a location
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  visitingTimings: {
    mondayToFriday: {
      type: String,
      required: true
    },
    saturday: {
      type: String,
      required: true
    },
    sunday: {
      type: String,
      required: false
    }
  },
  facilities: [{
    type: String
  }],
  reviews: [{
    author: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5
    }
  }],
  googleMapEmbedUrl: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
const Location = mongoose.model('Locations', locationSchema);

// Export the model
module.exports = Location;
