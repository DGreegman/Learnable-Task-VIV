const router = require('express').Router()
const UserController = require('../controllers/user.controller')
const validateUserInput = require('../middlewares/validateUserInput')
const user = new UserController()

router.post('/signup', validateUserInput, user.register)
router.post('/login', user.login)

module.exports = router