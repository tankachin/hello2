const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating Schema
const BrandSchema = new Schema({
  name: {
    type: String,
    unique: true,},
  created: {
    type: Date,
    default: Date.now
  }
},
{strict: true,
  collection: 'brand'
}
)

module.exports = mongoose.model('Brand', BrandSchema);
