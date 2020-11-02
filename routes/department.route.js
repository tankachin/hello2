const express = require('express');
const app = express();
const departmentRoute = express.Router();

// Department model
let Department = require('../models/Department');

// Add Department
departmentRoute.route('/create').post((req, res, next) => {
  Department.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Departments
departmentRoute.route('/').get((req, res) => {
  Department.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single department
departmentRoute.route('/read/:id').get((req, res) => {
  Department.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update department
departmentRoute.route('/update/:id').put((req, res, next) => {
  Department.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete department
departmentRoute.route('/delete/:id').delete((req, res, next) => {
  Department.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = departmentRoute;
