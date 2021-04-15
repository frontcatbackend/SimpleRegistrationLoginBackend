const Router = require('express')
const router = new Router()
const UserController = require('../controllers/UserController')
const UserListController = require('../controllers/UserListController')
const authMiddleware = require('../middleware/authMiddleware')

//registrate new User
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', UserController.check)

//registrated users list
router.get('/userlist',authMiddleware, UserListController.getAll)

module.exports = router