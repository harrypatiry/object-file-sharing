const S3 = require('aws-sdk/clients/S3');
const { BUCKET_NAME, REGION, ACCESS_KEY, SECRET_KEY } = require('../constants')

const s3 = new S3({
    REGION,
    ACCESS_KEY,
    SECRET_KEY,
})

//upload to s3 bucket
const uploadFile = (file) => {

    const params = {
        Bucket: BUCKET_NAME,
        Body: file.buffer,
        Key: file.originalname
    }
    return s3.upload(params).promise()
}

exports.uploadFile = uploadFile
