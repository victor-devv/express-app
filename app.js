const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// Add middleware used to parse body request
app.use(bodyParser.urlencoded({extended: false}));

// Handling Routes in Express
//using the get/post/delete etc do exact match as opposed to using use(), so arranging your routes doesn't matter when you use any of the protocol functions in your routes and not use()
//Import routes

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
});

app.listen(3000);