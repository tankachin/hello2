const express = require('express');
const app = express();
const categoryRoute = express.Router();

// Category model
let Category = require('../models/Category');

// Add Category
categoryRoute.route('/create').post((req, res, next) => {
  Category.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Categorys
categoryRoute.route('/').get((req, res) => {
  Category.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single category
categoryRoute.route('/read/:id').get((req, res) => {
  Category.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update category
categoryRoute.route('/update/:id').put((req, res, next) => {
  Category.findByIdAndUpdate(req.params.id, {
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

// Delete category
categoryRoute.route('/delete/:id').delete((req, res, next) => {
  Category.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = categoryRoute;
