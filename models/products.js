const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    description: String,
    image: String
});

module.exports = mongoose.model('products', productSchema);