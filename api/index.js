import Router from 'koa-router'
import cositas from './cosita.js'
import categoria from './categoria.js'
import compra from './compra.js'
import producto from './producto.js'
import changuito from './changuito.js'

const router = new Router();
const API_ROOT_PATH = '/api'

router.use('/api/cosita', cositas.routes());
router.use(API_ROOT_PATH, categoria.routes());
router.use('/api/compra', compra.routes());
router.use('/api/producto', producto.routes());
router.use('/api/changuito', changuito.routes());

export default router