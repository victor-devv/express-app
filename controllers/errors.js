exports.get404 = (req, res, next) => {
  res.render("errors/404", {
    pageTitle: "404 Page Not Found",
    path: "",
  });
};
