const express = require('express')
const cors = require('cors')
const app = express()
const { PORT, CLIENT_URL } = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')
// const PORT = 8000

//import passport middleware
require('./middleware/passport-middleware')

//intialize middleware
app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())

//import routes
const authRoutes = require('./routes/auth')

//initialize routes
app.use('/api', authRoutes)

const start = () => {


  try {
    app.listen(PORT, () => {
      console.log(`listening at http://localhost:${PORT}`)
    })
  } 
  catch (err) {
    console.log(`error: ${err.message}`)
  }
}
start()

module.exports = app