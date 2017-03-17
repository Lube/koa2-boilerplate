'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    contenido: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    }
  }, {
    tableName: 'Producto',
    classMethods: {
      associate: function associate(models) {
        Producto.hasMany(models.Compra, { as: 'Compras' }, { foreignKey: 'producto' });
      }
    }
  });
  return Producto;
};

;