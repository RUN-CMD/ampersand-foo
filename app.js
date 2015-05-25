console.log('foo start');


var fooSquares = require('./fooSquares');
var barBear = require('./bar');
var baz = require('./baz');

var input = [1, 2, 3, 4];

console.log('input: ', input);
console.log('output: ', fooSquares([6]) );
console.log('output: ', barBear('foo') );
console.log('output: ', baz() );

// load all of bootstrap's jquery plugins onto the jquery object.
require('bootstrap');
