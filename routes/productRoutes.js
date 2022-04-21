const productController = require('../controllers/productController.js')

const router = require('express').Router()

router.post('/addProduct', productController.addProduct)
router.get('/allProducts', productController.listOfAllProducts)

//get product suppliers

router.get('/get/:id', productController.getProductSuppliers)

//get product Stocks

router.get('/getTotalStock/:id', productController.getTotalStock )


module.exports = router;