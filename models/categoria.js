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
      unique: {
          args: true,
          msg: 'Ya existe una categoría con ese nombre.'
      },
      validate: {
        notEmpty: {
            args: true,
            msg: 'La categoría debe tener un nombre.'
        }
      }
    }
  }, {
    tableName: 'Categoria',
    classMethods: {
      associate: function associate(models) {
        Categoria.hasMany(models.Cosita, { as: 'Cositas' }, { foreignKey: 'categoria' });
      }
    }
  });

  return Categoria;
};

;