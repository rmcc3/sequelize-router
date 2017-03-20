var resourceRouter = require('./resource-router');
var methods = require('./controllers');

/**
 * @param model
 * @param override
 * @returns {*|router}
 */
module.exports = function(model, override) {
  if (model.name.toLowerCase() !== "sequelize") {
    var resource = resourceRouter(Object.assign({}, {
		id: model.name.toLowerCase()
    }, methods(model, override)));
  }
  return resource;
};
