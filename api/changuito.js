import Router from 'koa-router'
import Models from '../models'

const router = new Router();

router
    .get('/get', function(ctx, next) {
        return Models.Changuito.findAll().then(changuitos => ctx.body = changuitos)
    });

export default router