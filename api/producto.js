import Router from 'koa-router'
import Models from '../models'
import errorUtils from '../error_utils'

let processError = errorUtils.processError

const router = new Router();

router
    .get('/producto/:id', function(ctx, next) {
        return Models.Producto.findAll({
            where: {
                id: ctx.params.id
            }, 
            include: [{
                model: Models.Compra, as: 'compras'
            },{
                model: Models.Avistamiento, as: 'avistamientos'
            }]
        })
        .then(function(productos) {
            if (productos.length === 0) {
                ctx.status = 404
            } else {
                ctx.body = productos[0]
            }
        })
    })
    .post('/producto/:id', function(ctx, next) {
        return Models.Producto.findById(ctx.params.id)
        .then(function(producto) {
            if (!producto) {
                ctx.status = 404
            } else {
                return Models.Producto.update(ctx.request.body, {where: {id: ctx.params.id}})
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
    .post('/producto', function(ctx, next) {
        return Models.Producto.findOrCreate({
            where: {
                nombre: ctx.request.body.nombre
            },
            defaults: ctx.request.body
        })
        .spread(function( producto, created ) {
            if ( created ) {
                ctx.body = producto
            } else {
                ctx.status = 400
                ctx.body = 'Ya existe una producto con ese nombre!'
            }
        })
    })
    
export default router