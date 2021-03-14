const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/errors");

const app = express();

// Template engine

//app.set allows you set any configuration values. Read with app.get

app.set('view engine', 'ejs') 

//set folder where views are. Though views folder is default but just to show how its done
app.set('views', 'views')

const rootDir = require("./helpers/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}));

//serve files statically(public css, js img etc)
app.use(express.static(path.join(rootDir, 'public')));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);