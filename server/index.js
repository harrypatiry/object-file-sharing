const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const pool = require('./database')
const port = 5000

// middleware
app.use(cors())
app.use(express.json())


app.listen(port, () => {
  console.log('listening on port ' + port)
})

//routes

//create user
app.post('/users', async(req, res) => {
  try {
    const { username } =  req.body
    const newUser = await pool.query("INSERT INTO users (username) VALUES($1)",
    [username]);
    res.json(newUser);
  } catch(err) {
    console.error(err.message)
  }
})


module.exports = app