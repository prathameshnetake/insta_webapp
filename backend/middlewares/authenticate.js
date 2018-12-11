module.exports = (req, res, _next) => {
  if (!req.isAuthenticated()) {
    res.redirect("/login");
    return;
  }
  _next();
};
