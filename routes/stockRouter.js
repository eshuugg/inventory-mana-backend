const stockController = require('../controllers/stockController')

const router = require('express').Router()

router.get('/listOfAllStock', stockController.listOfAllStock)



module.exports = router;