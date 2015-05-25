console.log('fooSquares start');

var _ = require('underscore');

function fooSquares(list) {
  return _.map(list, function (n) { return n*n; });
}

module.exports = fooSquares;
