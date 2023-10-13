const db = require('../database/db');
const multer = require('multer');
const fs = require('fs')
const { uploadFile } = require('../database/s3')
const { BUCKET_NAME } = require('../constants')

exports.getPosts = async (req, res) => {
    try{
        const {rows} = await db.query('SELECT * FROM posts')
        return res.status(200).json({
            success: true,
            posts: rows
        })
    } catch(err){
        console.log(err.message)
    }
}

exports.createPost = async (req, res) => {
    try{
        // get file and username from request
        const file = req.file
        const user = req.body.user
        const id = req.body.id
        const title = req.body.title
        const description = req.body.description
        // console.log(id)
        console.log(file)
        const result = await uploadFile(file)
        console.log(result)
        // console.log(result.Key)
        // grab the location of the uploaded file
        let location = `https://${BUCKET_NAME}.s3.amazonaws.com/${result.Key}`

        await db.query('INSERT INTO posts (file_url, title, description, user_id) VALUES ($1, $2, $3, $4)', [location, title, description, id])
        return res.status(201).json({
            success: true,
            message: 'file was successfully uploaded.'
        })
        
    } catch(err){
        console.log(err.message)
        return res.status(500).json({
            error: err.message
        })
    }
}

exports.updatePost = async (req, res) => {
    res.send({})
}

exports.deletePost = async (req, res) => {
    const id = req.params.id
    res.send({})
}