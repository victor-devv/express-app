const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Template engine

//app.set allows you set any configuration values. Read with app.get

app.set('view engine', 'ejs') 

//set folder where views are. Though views folder is default but just to show how its done
app.set('views', 'views')

const rootDir = require("./helpers/path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}));

//serve files statically(public css, js img etc)
app.use(express.static(path.join(rootDir, 'public')));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "errors", "404.html"));

  // PUG
  res.render("errors/404", {
    pageTitle: "404 Page Not Found",
    path: "",
  });
});

app.listen(3000);