const { Router } = require('express')
const { getUsers, register, login, protected, logout } = require('../controllers/auth')
const { registerValidation, loginValidation } = require('../validators/auth')
const { validationMiddleware } = require('../middleware/validation-middleware')
const { userAuth } = require('../middleware/auth-middleware')
const { getPosts, createPost, deletePost, updatePost } = require('../controllers/post')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', userAuth, logout)
router.get('/get-posts', getPosts)
router.post('/create', createPost)
router.post('/update', updatePost)
router.delete('/delete', deletePost)

module.exports = router