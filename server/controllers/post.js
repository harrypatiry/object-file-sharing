const db = require('../database/db');
const multer = require('multer');
const fs = require('fs')
const { uploadFile } = require('../database/s3')

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
        // change file name to add file extension
        const file = req.file
        console.log(file)
        const result = await uploadFile(file)
        console.log(result)

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