// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = function(req, res, next) {
    if (!req.body.title || !req.body.pic || !req.body.url || !req.body.price || !req.body.author) {
      return next(new Error('信息不完整'));
    } else {
      return next();
    }
  };

}).call(this);
