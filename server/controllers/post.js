const db = require('../database/db');

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
    console.log("request body:", req.body)
    res.send({})
}

exports.updatePost = async (req, res) => {
    res.send({})
}

exports.deletePost = async (req, res) => {
    const id = req.params.id
    res.send({})
}

