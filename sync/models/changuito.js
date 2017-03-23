'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Changuito = sequelize.define('Changuito', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'La fecha no es válida.'
        }
      }
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: {
          args: true,
          msg: 'El total no es válido.'
        }
      }
    }
  }, {
    tableName: 'changuito',
    classMethods: {
      associate: function associate(models) {
        Changuito.hasMany(models.Compra, { name: 'compras', as: 'compras', foreignKey: 'changuito' });
      }
    },
    paranoid: true
  });

  return Changuito;
};

;