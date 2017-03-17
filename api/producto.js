import Router from 'koa-router'
import Models from '../models'

const router = new Router();

router
    .get('/get', function(ctx, next) {
        return Models.Producto.findAll().then(productos => ctx.body = productos)
    });

export default router