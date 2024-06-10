const express = require('express');
const mongoose = require("mongoose")
const app = express();
const cors = require('cors')
const products = require('./routes/products');
app.use(cors());
app.listen(4000, () => {
    console.log(`Server listening on port ${4000}`)
});

mongoose.connect(
    // process.env.MONGODB_URI, 
    "mongodb://localhost:27017/ecom-os",
    console.log("mongo database connected")
);

// Routes
app.use('/api', products);

app.use("/", (req, res, next) => {
    res.status(200).json({
        code: 20,
        msg: "Running",
    });
});