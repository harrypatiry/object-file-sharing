const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const pool = require('./database')
const port = 5000

// logging middleware
app.use(cors())
console.info('Starting server')

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

app.listen(port, () => {
  console.log('listening on port ' + port)
})

//routes

//create user
app.post('/users', async(req, res) => {
  try {
    console.log(req.body)
  } catch(err) {
    console.error(err.message)
  }
})


module.exports = app