"use strict";

var _models = require("./models");

require("babel-register");


_models.sequelize
    .query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
    .then(function(results) {
        return _models.sequelize.sync({force: true});
    })
    .then(function(results) {
        return _models.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', {raw: true})
    });
