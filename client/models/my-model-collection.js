// MyModel Collection - my-model-collection.js
var AmpCollection = require('ampersand-rest-collection');
var MyModel = require('./my-model');


module.exports = AmpCollection.extend({
    model: MyModel,
    url: '/api/my-model'
});