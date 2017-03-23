import Router from 'koa-router'
import Models from '../models'
import errorUtils from '../error_utils'

let processError = errorUtils.processError

const router = new Router();

router
    .post('/cosita/:id', function(ctx, next) {
        return Models.Cosita.findById(ctx.params.id)
        .then(function(cosita) {
            if (!cosita) {
                ctx.status = 404
            } else {
                return Models.Cosita.update(ctx.request.body, {where: {id: ctx.params.id}})
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
    .post('/cosita', function(ctx, next) {
        return Models.Cosita.findOrCreate({
            where: {
                nombre: ctx.request.body.nombre
            },
            defaults: ctx.request.body
        })
        .spread(function( cosita, created ) {
            if ( created ) {
                ctx.body = cosita
            } else {
                ctx.status = 400
                ctx.body = 'Ya existe una cosita con ese nombre!'
            }
        })
    })
    .get('/cositas', function(ctx, next) {
        return Models.Cosita.findAll().then(cositas => ctx.body = cositas)
    })
    .get('/cosita/:id', function(ctx, next) {
        return Models.Cosita.findAll({
            where: {
                id: ctx.params.id
            }, 
            include: [{
                model: Models.Producto, as: 'productos' 
            }] 
        })
        .then(function(cositas) {
            if (cositas.length === 0) {
                ctx.status = 404
            } else {
                ctx.body = cositas[0]
            }
        })
    })
    .delete('/cosita/:id', function(ctx, next) {
        return Models.Cosita.destroy({
            where: {
                id: ctx.params.id
            }
        })
        .then(function(cosita) {
            ctx.body = cosita
        })
    })
    
export default router