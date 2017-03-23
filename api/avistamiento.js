import Router from 'koa-router'
import Models from '../models'
import errorUtils from '../error_utils'

let processError = errorUtils.processError

const router = new Router();

router
    .post('/avistamiento/:id', function(ctx, next) {
        return Models.Avistamiento.findById(ctx.params.id)
        .then(function(avistamiento) {
            if (!avistamiento) {
                ctx.status = 404
            } else {
                return Models.Avistamiento.update(ctx.request.body, {where: {id: ctx.params.id}})
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
    .post('/avistamiento', function(ctx, next) {
        return Models.Avistamiento.create(ctx.request.body)
        .then(function({dataValues}) {
            ctx.body = dataValues
        })
    })
    .delete('/avistamiento/:id', function(ctx, next) {
        return Models.Avistamiento.destroy({
            where: {
                id: ctx.params.id
            }
        })
        .then(function(avistamiento) {
            ctx.body = avistamiento
        })
    })
    
export default router