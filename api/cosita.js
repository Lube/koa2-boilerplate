import Router from 'koa-router'
import Models from '../models'

const router = new Router();

router
    .get('/get', function(ctx, next) {
        return Models.Cosita.findAll().then(cositas => ctx.body = cositas)
    });

export default router