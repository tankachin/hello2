const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Date,
        required: true
    }
},
  { strict: true,
    collection: 'order'})

module.exports = mongoose.model('Order', orderSchema);
