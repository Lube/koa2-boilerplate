import Router from 'koa-router'
import cositas from './cosita.js'
import categoria from './categoria.js'
import compra from './compra.js'
import producto from './producto.js'
import changuito from './changuito.js'
import unidad from './unidad.js'
import lugar from './lugar.js'
import avistamiento from './avistamiento.js'

const router = new Router();
const API_ROOT_PATH = '/api'

router.use(API_ROOT_PATH, cositas.routes());
router.use(API_ROOT_PATH, categoria.routes());
router.use(API_ROOT_PATH, compra.routes());
router.use(API_ROOT_PATH, producto.routes());
router.use(API_ROOT_PATH, changuito.routes());
router.use(API_ROOT_PATH, unidad.routes());
router.use(API_ROOT_PATH, lugar.routes());
router.use(API_ROOT_PATH, avistamiento.routes());

export default router