const roleController = require('../controllers/roleController')

const router = require('express').Router()

//add role

router.post('/add', roleController.addrole)

// get user role

router.get('/get', roleController.getUserRole)

module.exports = router