'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Cosita = sequelize.define('Cosita', {
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
    descripcion: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    estado: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  }, {
    tableName: 'Cosita',
    classMethods: {
      associate: function associate(models) {
        Cosita.hasMany(models.Producto, { as: 'Productos' }, { foreignKey: 'cosita' });
      }
    }
  });

  return Cosita;
};

;