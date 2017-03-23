'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Cosita = sequelize.define('Cosita', {
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
          msg: 'La cosita debe tener un nombre.'
        }
      }
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'La cosita debe tener un estado.'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'La cosita debe tener un estado.'
        }
      }
    }
  }, {
    tableName: 'cosita',
    classMethods: {
      associate: function associate(models) {
        Cosita.hasMany(models.Producto, { as: 'productos', foreignKey: 'cosita' });
      }
    },
    paranoid: true
  });

  return Cosita;
};

;