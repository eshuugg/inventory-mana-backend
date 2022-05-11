const companyController = require('../controllers/companyController')

const router = require('express').Router()

router.post('/add', companyController.addCompany)

//get all product
router.get('/:company_id/products/:id/supplier/sell/stock', companyController.getTotalProductInfo)

router.get('/:id/products', companyController.getTotalProduct)

// router.get('product/:id', companyController.getTotalProduct)


//get all user

router.get('/:id/user', companyController.getTotalUser)



router.delete('/')

module.exports = router;