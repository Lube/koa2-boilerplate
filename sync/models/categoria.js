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
      unique: true,
      validate: {
        notEmpty: true
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