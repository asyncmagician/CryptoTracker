const checkAuth = (req, res, next) => {
    if (req.session && req.session.userId) {
      res.redirect('/home');
    } else {
      next();
    }
  };
  
  module.exports = checkAuth;
  