const productController = require('../controllers/productController.js')

const router = require('express').Router()

router.post('/add', productController.addProduct)

//get product Stocks

router.get('/getTotalStock/:id', productController.getTotalStock)

//get sell Report

router.get('/:id/sell', productController.getSellReport)

//search product
router.get('/search?name')

//delete product
router.delete('/product/:id', productController.deleteProduct)


module.exports = router;