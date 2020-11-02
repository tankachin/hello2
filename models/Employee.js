const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Customer = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'customers'
})

module.exports = mongoose.model('Customer', Customer)
