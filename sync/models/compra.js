'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Compra = sequelize.define('Compra', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: true
      }
    }
  }, {
    tableName: 'Compra'
  });

  return Compra;
};

;