'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Unidad = sequelize.define('Unidad', {
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