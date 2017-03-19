var Router = require('express').Router;

var keyed = ['findById', 'update', 'remove'],
	map = { find:'get', findOne:'get', findById:'get', create:'post', update:'put', remove:'delete' };
  
module.exports = function resourceRouter(route) {
  var router = new Router();
  var name = '/' + route.id.toLowerCase();
  if (route.middleware) router.use(route.middleware);

  for (key in route) {
    fn = map[key] || key;
    if (typeof router[fn] === 'function') {
      console.log(fn)
      url = ~keyed.indexOf(key) ? (name + '/:id') : name;
      console.log(url)
     router[fn](url, route[key]);
    }
  }
  return router;
};
