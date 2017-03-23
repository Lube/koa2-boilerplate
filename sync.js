"use strict";

const db = require("./models");
const seeder = require('sequelize-fixtures');
const fs = require('fs');
const path = require('path');

require("babel-register");

db.sequelize
    .query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
    .then(function(results) {
        return db.sequelize.sync({force: true});
    })
    .then(async function(results){
        // fs.readdirSync('./seeders')
        //     .filter(function (file) {
        //         return file.indexOf('.') !== 0 && file.slice(-5) === '.json';
        //     })
        //     .map(async function (file) {
        //         await seeder.loadFile(path.join(__dirname + '/seeders/', file), db);
        //     });
        await seeder.loadFile('./seeders/categorias.json', db);
        await seeder.loadFile('./seeders/lugares.json', db);
        await seeder.loadFile('./seeders/productos.json', db);
        await seeder.loadFile('./seeders/unidades.json', db);   
        await seeder.loadFile('./seeders/cositas.json', db);
        await seeder.loadFile('./seeders/changuitos.json', db);
        await seeder.loadFile('./seeders/compras.json', db);
        await seeder.loadFile('./seeders/avistamientos.json', db);
    })
    .then(function(results) {
        return db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', {raw: true})
    })
