
const Schema = require('mongoose').Schema;
const mongoose = require('mongoose')

const outfitSchema = new Schema({
  event: { type: String},
  top: {type: String, required: true},
  topColor: {type: String, required: true},
  bottom: {type: String, required: true},
  bottomColor: {type: String, required: true},
  feet: {type: String, required: true},
  feetColor: {type: String, required: true},
  description: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model("Outfit", outfitSchema);