const { Router } = require('express')
const { getUsers, register, login, protected, logout, getLoggedInUser } = require('../controllers/auth')
const { registerValidation, loginValidation } = require('../validators/auth')
const { validationMiddleware } = require('../middleware/validation-middleware')
const { userAuth } = require('../middleware/auth-middleware')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', logout)
// router.get('/me', getLoggedInUser)

module.exports = router