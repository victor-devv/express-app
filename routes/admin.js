const express = require("express");

const router = express.Router();

//Note that if you're sending a response in a middleware, make sure not to add the next() function
router.get("/add-product", (req, res, next) => {
  res.send(
    "<h2>Add Product Page</h2></hr></br></br><form action='/add-product' method='POST'><input type='text' name='product'><button type='submit'>Add Product</button></form>"
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
