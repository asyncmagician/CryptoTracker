const checkAuth = (redirectTo) => {
  return (req, res, next) => {
    if (req.session && req.session.userId) {
      res.redirect(redirectTo);
    } else {
      next();
    }
  };
};

module.exports = checkAuth;