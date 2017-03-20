/**
 * @param model
 * @param override
 */
module.exports = function(model, override) {
	/**
	 * @type {*}
	 */
  var override = override || {};
	/**
	 * @type {{findById: findById, find: find, create: create, update: update, remove: remove}}
	 */
  var methods = {
	  /**
	   * @param req
	   * @param res
	   */
    findById: function(req, res) {
      console.log(req);
      model.findOne({
          where: req.params.id
        })
        .then(function(dbUser) {
          res.json(dbUser);
        })
        .catch(function(err) {
          res.json(err);
        });
    },
	  /**
	   * @param req
	   * @param res
	   */
    find: function(req, res) {
      model.findAll({
          where: req.params
        })
        .then(function(dbModel) {
          res.json(dbModel);
        })
        .catch(function(err) {
          res.json(err);
        })
    },
	  /**
	   * @param req
	   * @param res
	   */
    create: function(req, res) {
      model.create(req.body)
        .then(function(dbModel) {
          res.json(dbModel);
        })
        .catch(function(err) {
          res.json(err);
        });
    },
	  /**
	   * @param req
	   * @param res
	   */
    update: function(req, res) {
      model.update(req.body, {
          where: req.params.id
        })
        .then(function(dbModel) {
          res.json(dbModel);
        })
        .catch(function(err) {
          res.json(err);
        });
    },
	  /**
	   * @param req
	   * @param res
	   */
    remove: function(req, res) {
      model.destroy({ where: req.params.id })
        .then(function(dbModel) {
          res.json(dbModel);
        })
        .catch(function(err) {
          res.json(err);
        });
    }
  };
  return Object.assign({}, methods, override);
};
