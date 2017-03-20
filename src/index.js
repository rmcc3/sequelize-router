var modelParser = require('./model-parser');

/**
 * @param model
 * @param config
 * @returns {resource}
 */
module.exports = function(model, config) {
  var config = config || {};
  return modelParser(model, config);
};