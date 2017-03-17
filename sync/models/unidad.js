'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Unidad = sequelize.define('Unidad', {
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
    }
  }, {
    tableName: 'Unidad',
    classMethods: {
      associate: function associate(models) {
        Unidad.hasMany(models.Producto, { as: 'Productos' }, { foreignKey: 'unidad' });
      }
    }
  });

  return Unidad;
};

;