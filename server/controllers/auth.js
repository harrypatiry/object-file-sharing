const db = require('../database/db');
const {hash} = require('bcrypt');
const {sign} = require('jsonwebtoken');
const { SECRET } = require('../constants');

exports.getUsers = async (req, res) => {
    try{
        const {rows} = await db.query('SELECT id, email FROM users')
        return res.status(200).json({
            success: true,
            users: rows
        })
    } catch(err){
        console.log(err.message)
    }
}

exports.protected = async (req, res) => {
    try{
        return res.status(200).json({
            info: 'protected information'
        })
    } catch(err){
        console.log(err.message)
    }
}

exports.register = async (req, res) => {
    const {email, password, username} = req.body
    try{
        const hashedPassword = await hash(password, 10)

        await db.query('INSERT INTO users (email, password, username) VALUES ($1, $2, $3)', [email, hashedPassword, username])
        return res.status(201).json({
            success: true,
            message: 'Registration was successfully completed.'
        })
    } catch(err){
        console.log(err.message)
        return res.status(500).json({
            error: err.message
        })
    }
}

exports.login = async (req, res) => {
    let user = req.user
    console.log(user.username)
    let payload = {
        id: user.id,
        email: user.email
    }
    try {
        const token = await sign(payload, SECRET)
        return res.status(200).cookie('token', token, {httpOnly: true}).json({
            success: true,
            message: 'Login successful'
        })
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            error: err.message
        });
    }
}

exports.getLoggedInUser = async (req, res) => {
    console.log(req.user)
}

exports.logout = async (req, res) => {
    try {
        return res.status(200).clearCookie('token', {httpOnly: true}).json({
            success: true,
            message: 'Logout successful'
        })
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            error: err.message
        });
    }
}