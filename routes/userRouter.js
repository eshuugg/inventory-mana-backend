const userController = require('../controllers/userController')

const router = require('express').Router()

//add user

router.post('/add', userController.addUser)

//login user

router.post('/login', userController.loginUser)



module.exports = router;