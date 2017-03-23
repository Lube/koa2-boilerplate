import Router from 'koa-router'
import Models from '../models'
import errorUtils from '../error_utils'

let processError = errorUtils.processError

const router = new Router();

router
    .post('/categoria/:id', function(ctx, next) {
        return Models.Categoria.findById(ctx.params.id)
        .then(function(categoria) {
            if (!categoria) {
                ctx.status = 404
            }
            return categoria
        })
        .then(function (categoria) {
            return Models.Categoria.update(ctx.request.body, {where: {id: ctx.params.id}})
        })
        .then (function(actualizadas) {
            return Models.Categoria.findById(ctx.params.id)
            .then(function(categoria){
                ctx.body = categoria
            })
        })
        .catch(function(e){
            ctx.body = processError(e)
            ctx.status = 400
        })
    })
    .post('/categoria', function(ctx, next) {
        return Models.Categoria.findOrCreate({
            where: {
                nombre: ctx.request.body.nombre
            }
        })
        .spread(function( categoria, created ) {
            if ( created ) {
                console.log(categoria)
                ctx.body = categoria.get({plain: true})
            } else {
                ctx.status = 400
                ctx.body = 'Ya existe una categoría con ese nombre!'
            }
        })
    })
    .get('/categorias', function(ctx, next) {
        return Models.Categoria.findAll({
            include: [{
                model: Models.Cosita, as: 'cositas'
            }]
        })
        .then(categorias => ctx.body = categorias)
    })
    .get('/categoria/:id', function(ctx, next) {
        return Models.Categoria.findAll({
            where: {
                id: ctx.params.id
            }, 
            include: [{
                model: Models.Cosita, as: 'cositas' 
            }] 
        })
        .then(function(categorias) {
            if (categorias.length === 0) {
                ctx.status = 404
            } else {
                ctx.body = categorias[0]
            }
        })
    })
    .delete('/categoria/:id', function(ctx, next) {
        return Models.Categoria.destroy({
            where: {
                id: ctx.params.id
            }
        })
        .then(function(categoria) {
            ctx.body = categoria
        })
    })

export default router