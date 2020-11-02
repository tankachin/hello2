const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    gender: {
      type: String
    },
    dateofBirth:
      {
        type: Date
      },
    homeadddress:
      {
        type: String
      }
    ,
    city:
      {
        type: String
      }
    ,
    country:
      {
        type: String
      }
    ,
    postalcode:
      {
        type: String
      }
    ,

    phoneNumber:
      {
        type: Number,
        unique: true,

      }
    ,
    cellNumber:
      {
        type: Number,
        unique: true,
      }
    ,
    email:
      {
        type: String,
        unique: true,
      }
    ,
  },
  {
    strict: true
  },
{
  strict: true,
  collection: 'customers'
}
)

module.exports = mongoose.model('Customer', customerSchema);
