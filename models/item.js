
const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  color: {String, required: true},
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  description: { type: String }
}, {
  timestamps: true
});

module.exports = itemSchema;