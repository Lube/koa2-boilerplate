import Router from 'koa-router'
import Models from '../models'
import errorUtils from '../error_utils'

let processError = errorUtils.processError

const router = new Router();

router
    .post('/changuito/:id', function(ctx, next) {
        return Models.Changuito.findById(ctx.params.id)
        .then(function(changuito) {
            if (!changuito) {
                ctx.status = 404
            } else {
                return Models.Changuito.update(ctx.request.body, {where: {id: ctx.params.id}})
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
    .post('/changuito', function(ctx, next) {
        return Models.Changuito.create({
            fecha: new Date(),
            total: 0
        })
        .then(function({dataValues}) {
            ctx.body = dataValues
        })
    })
    .get('/changuitos', function(ctx, next) {
        return Models.Changuito.findAll({ 
            include: [{
                model: Models.Compra, as: 'compras' 
            }] 
        })
        .then(changuitos => ctx.body = changuitos)
    })
    .get('/changuito/:id', function(ctx, next) {
        return Models.Changuito.findAll({
            where: {
                id: ctx.params.id
            }, 
            include: [{
                model: Models.Compra, as: 'compras' 
            }] 
        })
        .then(function(changuitos) {
            if (changuitos.length === 0) {
                ctx.status = 404
            } else {
                ctx.body = changuitos[0]
            }
        })
    })
    .delete('/changuito/:id', function(ctx, next) {
        return Models.Changuito.destroy({
            where: {
                id: ctx.params.id
            }
        })
        .then(function(changuito) {
            ctx.body = changuito
        })
    })
    
export default router