'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Lugar = sequelize.define('Lugar', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
            args: true,
            msg: 'El lugar debe tener un nombre.'
        }
      }
    },
    ubicacion: {
      type: DataTypes.GEOMETRY,
      allowNull: false
    }
  }, {
    tableName: 'lugar',
    classMethods: {
      associate: function associate(models) {
        Lugar.hasMany(models.Avistamiento, { as: 'avistamientos', foreignKey: 'lugar' });
        Lugar.hasMany(models.Changuito, { as: 'changuitos', foreignKey: 'lugar' });
      }
    },
    paranoid: true
  });

  return Lugar;
};
