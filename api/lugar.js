import Router from 'koa-router'
import Models from '../models'
import errorUtils from '../error_utils'

let processError = errorUtils.processError

const router = new Router();

router
    .post('/lugar/:id', function(ctx, next) {
        return Models.Lugar.findById(ctx.params.id)
        .then(function(lugar) {
            if (!lugar) {
                ctx.status = 404
            } else {
                return Models.Lugar.update(ctx.request.body, {where: {id: ctx.params.id}})
                .then(function(actualizadas) {
                    ctx.body = actualizadas
                })
            }
        })
        .catch(function(e){
            ctx.body = processError(e)
            ctx.status = 400
        })
    })
    .post('/lugar', function(ctx, next) {
        return Models.Lugar.findOrCreate({
            where: {
                nombre: ctx.request.body.nombre,
                ubicacion: ctx.request.body.ubicacion
            }
        })
        .spread(function( lugar, created ) {
            if ( created ) {
                ctx.body = lugar
            } else {
                ctx.status = 400
                ctx.body = 'Ya existe una lugar con ese nombre!'
            }
        })
    })
    .get('/lugares', function(ctx, next) {
        return Models.Lugar.findAll({
            include: [{
                model: Models.Changuito, as: 'changuitos'
            },{
                model: Models.Avistamiento, as: 'avistamientos'
            }]
        })
        .then(lugares => ctx.body = lugares)
    })
    .get('/lugar/:id', function(ctx, next) {
        return Models.Lugar.findAll({
            where: {
                id: ctx.params.id
            }, 
            include: [{
                model: Models.Changuito, as: 'changuitos'
            },{
                model: Models.Avistamiento, as: 'avistamientos'
            }]
        })
        .then(function(lugares) {
            if (lugars.length === 0) {
                ctx.status = 404
            } else {
                ctx.body = lugares[0]
            }
        })
    })
    .delete('/lugar/:id', function(ctx, next) {
        return Models.Lugar.destroy({
            where: {
                id: ctx.params.id
            }
        })
        .then(function(lugar) {
            ctx.body = lugar
        })
    })

export default router