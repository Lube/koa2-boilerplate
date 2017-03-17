import Router from 'koa-router'
import Models from '../models'
import errorUtils from '../error_utils'

let processError = errorUtils.processError

const router = new Router();

router
    .post('/categoria/:id', function(ctx, next) {
        return Models.Categoria.findById(ctx.params.id)
        .then(function({dataValues}) {
            if (!dataValues) {
                ctx.status = 404
            } else {
                return Models.Categoria.update(ctx.request.body, {where: {id: ctx.params.id}})
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
    .post('/categoria', function(ctx, next) {
        return Models.Categoria.create({
            nombre: ctx.request.body.nombre
        })
        .then(function({dataValues}) {
            ctx.body = dataValues
        })
        .catch(function(e) {
            ctx.body = processError(e)
            ctx.status = 400
        })
    })
    .get('/categorias', function(ctx, next) {
        return Models.Categoria.findAll().then(categorias => ctx.body = categorias)
    })
    .get('/categoria/:id', function(ctx, next) {
        return Models.Categoria.findById(ctx.params.id)
        .then(function({dataValues}) {
            if (!dataValues) {
                ctx.status = 404
            } else {
                ctx.body = dataValues
            }
        })
    })

export default router