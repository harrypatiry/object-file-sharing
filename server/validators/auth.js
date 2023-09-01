const { check } = require('express-validator');
const db = require('../database/db');
const { compare } = require('bcryptjs');

//password 
const username = check('username').isLength({ min: 2, max: 15})
.withMessage('Username must be between 2 and 15 characters.')

//password 
const password = check('password').isLength({ min: 6, max: 15})
.withMessage('Password must be between 6 and 15 characters.')

//email 
const email = check('email').isEmail()
.withMessage('Please enter a valid email address.');

//check if email exists
const emailExists = check('email').custom(async (value) => {
    const { rows } = await db.query('SELECT * from users WHERE email = $1', [
        value,
    ])
    if (rows.length) {
        throw new Error('Email already exists.')
    }
})

//check if username exists
const userExists = check('username').custom(async (value) => {
    const { rows } = await db.query('SELECT * from users WHERE username = $1', [
        value,
    ])
    if (rows.length) {
        throw new Error('Username already exists.')
    }
})

//login validation
const loginFieldsCheck = check('email').custom(async (value, { req }) => {
    const user = await db.query('SELECT * from users WHERE email = $1', [value])
    if (!user.rows.length) {
        throw new Error('Email does not exists.')
    }

    const validPassword = await compare(req.body.password, user.rows[0].password)
    if (!validPassword) {
        throw new Error('Wrong password')
    }
    
    req.user = user.rows[0]
})

module.exports = {
    registerValidation: [username, email, password, emailExists, userExists],
    loginValidation: [loginFieldsCheck]
}