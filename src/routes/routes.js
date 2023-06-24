const router = require('express').Router()

const ProductController = require('../controllers/products')

router.get('/products/:id?', ProductController.get) // passar o parametro ? para informar que id é opcional
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

module.exports = router