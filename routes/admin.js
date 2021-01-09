const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

//Note that if you're sending a response in a middleware, make sure not to add the next() function
router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
