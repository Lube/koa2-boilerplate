import Router from 'koa-router'
import Models from '../models'

const router = new Router();

router
    .post('', function(ctx, next) {
        return Models.Categoria.findAll().then(categorias => ctx.body = categorias)
    })
    .get('s', function(ctx, next) {
        return Models.Categoria.findAll().then(categorias => ctx.body = categorias)
    });

export default router