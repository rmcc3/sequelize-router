var Router = require('express').Router;

/**
 * @type {[*]}
 */
var keyed = ['findById', 'update', 'remove'];

/**
 * @type {{find: string, findOne: string, findById: string, create: string, update: string, remove: string}}
 */
var map = { find:'get', findOne:'get', findById:'get', create:'post', update:'put', remove:'delete' };

/**
 * @param route
 * @returns {*}
 */
module.exports = function resourceRouter(route) {
  var router = new Router();
  var name = '/' + route.id.toLowerCase();
  if (route.middleware) router.use(route.middleware);

  for (key in route) {
    var fn = map[key] || key;
    if (typeof router[fn] === 'function') {
      var url = ~keyed.indexOf(key) ? (name + '/:id') : name;
      router[fn](url, route[key]);
    }
  }
	return router;
};
