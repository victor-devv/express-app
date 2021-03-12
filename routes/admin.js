const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

const products = [];

//Note that if you're sending a response in a middleware, make sure not to add the next() function
router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;
exports.routes = router
exports.products = products