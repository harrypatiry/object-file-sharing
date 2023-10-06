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
            users: rows
        })
    } catch(err){
        console.log(err.message)
    }
}

exports.createPost = async (req, res) => {
    // Save this data to a database probably
    
    try{
        // get file and username from request
        const file = req.file
        const user = req.body.user
        console.log(user)
        console.log(file)
        const result = await uploadFile(file)
        console.log(result)
        // console.log(result.Key)
        // grab the location of the uploaded file
        location = `https://${BUCKET_NAME}.s3.amazonaws.com/${result.Key}`

        res.send('💾')

        // await db.query('INSERT INTO posts (files) VALUES $1', [newFileName])
        // return res.status(201).json({
        //     success: true,
        //     message: 'file was successfully uploaded.'
        // })
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