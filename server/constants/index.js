const path = require('path');
console.log(require('dotenv').config({path:'./.env'}))

module.exports = {
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    SECRET: process.env.SECRET,
    BUCKET_NAME: process.env.BUCKET_NAME,
    REGION: process.env.BUCKET_REGION,
    ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID,
    SECRET_KEY: process.env.AWS_SECRET_ACCESS_KEY
}