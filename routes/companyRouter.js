const companyController = require('../controllers/companyController')

const router = require('express').Router()

router.post('/add', companyController.addCompany)

//get all product
router.get('/get/:id', companyController.getTotalProduct)

//get all user

router.get('/:id/user', companyController.getTotalUser)

router.delete('/')

module.exports = router;