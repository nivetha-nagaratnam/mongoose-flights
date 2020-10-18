const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

//define basic Schema	
const flightSchema = new Schema({
  airline: {
      type: String,
      enum: ['American', 'Southwest', 'United'],
  },
  airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN' ],
      default: 'DEN'
   },
  flightNo: {
      type: Number,
      required: true,
      min:10,
      max:9999,
  },
  departs: {
      type: Date,
      default: function() {
        return new Date().setFullYear(new Date().getFullYear() + 1)
      },
  }
});

//Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);


	
