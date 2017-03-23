'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Avistamiento = sequelize.define('Avistamiento', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: {
          args: true,
          msg: 'El precio no es válido.'
        }
      }
    },
    fecha: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'La fecha no es válida.'
        }
      }
    }
  }, {
    tableName: 'avistamiento',
    paranoid: true
  });

  return Avistamiento;
};