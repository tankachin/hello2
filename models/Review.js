//reviewSchema
const mongoose = require('mongoose');
let ReviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sku: {
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory'
    },
    userdetails: {
            {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    comments: String,

    CreatedOn: {
    type: Date,
    'default': date.now
},
    modifiedOn: Date,


});
{strict: true,
  collection: 'review'
})
module.exports = mongoose.model('Review', ReviewSchema);
