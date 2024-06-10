const Products = require('../models/products')
// get products api
exports.getProducts = (req, res) => {
    // Logic to get products
    Products.find()
        .then(items => res.json(items));
};