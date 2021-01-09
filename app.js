const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const rootDir = require("./helpers/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// Add middleware used to parse body request
app.use(bodyParser.urlencoded({extended: false}));

// Handling Routes in Express
//using the get/post/delete etc do exact match as opposed to using use(), so arranging your routes doesn't matter when you use any of the protocol functions in your routes and not use()

//Import routes

//You can filter routes by adding a prefix as shown below. Express would add the prefix before all paths in the route files
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "errors", "404.html"));
});

app.listen(3000);