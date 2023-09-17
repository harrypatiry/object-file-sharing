const { Router } = require('express')
const { getPosts, deletePost, updatePost, createPost } = require('../controllers/post')
const router = Router()
const multer = require("multer");
const path = require('path')
const storage = multer.memoryStorage()
const upload = multer({ 
    storage,
    // dest: "./uploads/",
    limits: {fileSize: 1048576}, // 10 Mb

    fileFilter: (req, file, callback) => {
        // const acceptableExtensions = ['.obj', '.stl', '.zip'];
        const acceptableExtensions = ['.png', '.jpg'];
        if (!(acceptableExtensions.includes(path.extname(file.originalname)))) {
          return callback(new Error('Not the correct file extension'));
        }
  
        // added this
        const fileSize = parseInt(req.headers['content-length']);
        if (fileSize > 1048576) {
          return callback(new Error('File is too large'));
        }
        // --
  
  
        callback(null, true);
      }
});

router.get('/get-posts', getPosts)
router.post('/create', upload.single("file"), createPost)

router.post('/update', updatePost)
router.delete('/delete', deletePost)

module.exports = router
