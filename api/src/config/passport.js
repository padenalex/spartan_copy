const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const prisma = require('./database')
const fs = require('fs')
const path = require('path')

const pathToKey = path.join(__dirname, '../../', 'id_rsa_pub.pem')
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
}

module.exports = (passport) => {
  passport.use(new JwtStrategy(options, async (payload, done) => {
    try {
      const user = await prisma.users.findOne({
        where: { id: payload.sub }
      })
      return done(null, user)
    } catch (e) {
      return done(e, false)
    }
  })
  )
}
