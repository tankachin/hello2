const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating Schema
const DepartmentSchema = new Schema({
  name: {
    type: String,
    unique: true,},
  created: {
    type: Date,
    default: Date.now
  }
},
  {strict: true,
  collection: 'department'
})

module.exports = mongoose.model('Department', DepartmentSchema);
