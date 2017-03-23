'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Categoria = sequelize.define('Categoria', {
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
            msg: 'La categoría debe tener un nombre.'
        }
      }
    }
  }, {
    tableName: 'categoria',
    classMethods: {
      associate: function associate(models) {
        Categoria.hasMany(models.Cosita, { as: 'cositas', foreignKey: 'categoria' });
      }
    },
    paranoid: true
  });

  return Categoria;
};

;