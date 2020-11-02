//inventory Schema
const mongoose = require('mongoose');
let InventorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sku: {

        type: Number,
        unique: true
    },
    title: String,
    description: String,
    modeldetails: {
        Model: String,
        Brand: String
    },
    Price: Number,
    Quantity: Number,
    Productdetails: {
        weight: Number,
        height: Number,
        depth: Number,
        barcode: Number,
        material: String,
        colour: String,

    },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
  department: { type: Schema.Types.ObjectId, ref: 'Department' },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    },
    CreatedOn: {
      type: Date,
      default: Date.now
    },
    modifiedOn: Date,



}, {strict: true,
  collection: 'product'
})
module.exports = mongoose.model('Inventory', InventorySchema);
