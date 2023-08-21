const path = require('path');
console.log(require('dotenv').config({path:'./.env'}))

module.exports = {
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    SECRET: process.env.SECRET,
}