'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
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