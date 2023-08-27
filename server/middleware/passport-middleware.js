const passport = require('passport')
const { Strategy } = require('passport-jwt')
const { SECRET } = require('../constants')
const db = require('../database/db')

const cookieExtractor = (req) => {
    let token = null
    if (req && req.cookies) token = req.cookies['token']
    return token
}

const opts = {
    secretOrKey: SECRET,
    jwtFromRequest: cookieExtractor
}

passport.use(
    new Strategy(opts, async ({ id }, done) => {
        try {
<<<<<<< HEAD
            const { rows } = await db.query(`SELECT id, email FROM users WHERE id = $1`, [id])
=======
            const { rows } = await db.query(`SELECT user_id, email FROM users WHERE user_id = $1`, [id])
>>>>>>> bd632035e9abfeb0b02fbc95ce5221b4f7c17caa
            
            if (!rows.length) {
                throw new Error('401 Unauthorized')
            }
            let user = { id: rows[0].id, email: rows[0].email}
            return await done(null, user)
        } catch (err) {
            console.log(err.message)
            done(null, false)
        }
    })
)