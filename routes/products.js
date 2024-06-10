const express = require('express');
const router = express.Router();
const Controller = require('../controllers/products')

// Get All Products
router.route("/products").get(Controller.getProducts);

//Export
module.exports = router;