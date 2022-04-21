const supplierController = require('../controllers/supplierController.js')

const router = require('express').Router()

router.get ('/listOfAllSuppliers', supplierController.listOfAllSuppliers)

module.exports = router;