const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const rootDir = require("./helpers/path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}));

//serve files statically(public css, js img etc)
app.use(express.static(path.join(rootDir, 'public')));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "errors", "404.html"));
});

app.listen(3000);