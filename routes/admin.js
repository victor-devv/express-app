const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

//Note that if you're sending a response in a middleware, make sure not to add the next() function
// router.get("/add-product", productsController.getAddProduct);

// router.post("/add-product", productsController.postAddProduct);

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;