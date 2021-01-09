const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Add middleware used to parse body request
app.use(bodyParser.urlencoded({extended: false}));

// Handling Routes in Express

//If you wanna add a middleware that applies to all routes, it should be on top, with the next()
// app.use('/',(req, res, next) => {
//   console.log("Welcome to My Express App!");
//   next();
// });

//Note that if you're sending a response in a middleware, make sure not to add the next() function
app.get("/add-product", (req, res, next) => {
  res.send(
    "<h2>Add Product Page</h2></hr></br></br><form action='/add-product' method='POST'><input type='text' name='product'><button type='submit'>Add Product</button></form>"
  );
}); //this route has to be placed before the / route cos routes are read from top to bottom and since there'll be a '/' before add-product, it'll read the / route instead.

app.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h2>Hello From Express!</h2>");
});


app.listen(3000);