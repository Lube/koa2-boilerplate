'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Compra = sequelize.define('Compra', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal:  {
            args: true,
            msg: 'El precio no es válido.'
        }
      }
    }
  }, {
    tableName: 'Compra'
  });

  return Compra;
};

;