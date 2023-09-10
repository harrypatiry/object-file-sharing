const db = require('../database/db');
const multer = require('multer');
const fs = require('fs')

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
        const fileName = req.file.filename
        let fileType = req.file.mimetype.split('/')[1]
        let newFileName = req.file.filename + '.' + fileType
        console.log(req.file.mimetype)

        fs.rename(`./uploads/${req.file.filename}`, `./uploads/${newFileName}`, () => {
            console.log("file renamed")
        })
        console.log(newFileName)
        res.send({fileName})

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