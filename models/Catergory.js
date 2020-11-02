const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating Schema
const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,},
  created: {
    type: Date,
    default: Date.now
  }
}, { strict: true,
  collection: 'category'
})

module.exports = mongoose.model('Category', CategorySchema);
