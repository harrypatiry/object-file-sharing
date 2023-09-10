const { Router } = require('express')
const { getPosts, deletePost, updatePost, createPost } = require('../controllers/post')
const router = Router()
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

router.get('/get-posts', getPosts)
router.post('/create', upload.single("file"), createPost)

router.post('/update', updatePost)
router.delete('/delete', deletePost)

module.exports = router
