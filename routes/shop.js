const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html")); //same as '/views/shop.html' but with functionality to work on all systems, and dirname to path of the projects
});

module.exports = router;
