const express = require("express");

const app = express();

// Handling Routes in Express

//If you wanna add a middleware that applies to all routes, it should be on top, with the next()
app.use('/',(req, res, next) => {
  console.log("Welcome to My Express App!");
  next();
});

//Note that if you're sending a response in a middleware, make sure not to add the next() function
app.use('/add-product',(req, res, next) => {
  res.send("<h2>Add Product Page</h2>");
}); //this route has to be placed before the / route cos routes are read from top to bottom and since there'll be a '/' before add-product, it'll read the / route instead.

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h2>Hello From Express!</h2>");
});


app.listen(3000);