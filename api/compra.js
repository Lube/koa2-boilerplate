import Router from 'koa-router'
import Models from '../models'

const router = new Router();

router
    .get('/get', function(ctx, next) {
        return Models.Compra.findAll().then(compras => ctx.body = compras)
    });

export default router