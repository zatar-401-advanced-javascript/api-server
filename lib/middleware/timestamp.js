'use strict';

module.exports = (req, res, next) => {
  req.requestTime = (new Date().toString());
  next();
};