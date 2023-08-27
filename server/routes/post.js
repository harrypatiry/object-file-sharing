const { Router } = require('express')
const { getPosts, createPost, deletePost, updatePost } = require('../controllers/post')
const router = Router()

router.get('/get-posts', getPosts)
router.post('/create', createPost)
router.post('/update', updatePost)
router.delete('/delete', deletePost)