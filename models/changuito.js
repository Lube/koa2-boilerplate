'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Changuito = sequelize.define('Changuito', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: true
      }
    }
  }, {
    tableName: 'Changuito',
    classMethods: {
      associate: function associate(models) {
        Changuito.hasMany(models.Compra, { as: 'Compras' }, { foreignKey: 'compra' });
      }
    }
  });

  return Changuito;
};

;