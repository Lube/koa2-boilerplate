import Router from 'koa-router'
import Models from '../models'
import errorUtils from '../error_utils'

let processError = errorUtils.processError

const router = new Router();

router
    .get('/unidades', function(ctx, next) {
        return Models.Unidad.findAll().then(unidades => ctx.body = unidades)
    })
    
export default router