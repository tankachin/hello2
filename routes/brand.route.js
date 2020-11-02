const express = require('express');
const app = express();
const brandRoute = express.Router();

// Brand model
let Brand = require('../models/Brand');

// Add Brand
brandRoute.route('/create').post((req, res, next) => {
  Brand.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Brands
brandRoute.route('/').get((req, res) => {
  Brand.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single brand
brandRoute.route('/read/:id').get((req, res) => {
  Brand.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update brand
brandRoute.route('/update/:id').put((req, res, next) => {
  Brand.findByIdAndUpdate(req.params.id, {
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

// Delete brand
brandRoute.route('/delete/:id').delete((req, res, next) => {
  Brand.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = brandRoute;
