const router = require('express').Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')
const prisma = require('../config/database')
const utils = require('../lib/utils')

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const me = req.user
  res.status(200).json({ success: true, user: me })
})

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await prisma.users.findOne({
      where: { email: email }
    })

    if (!user) {
      res.status(401).json({ success: false, msg: 'No such user' })
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (isValid) {
      const token = utils.issueToken(user)
      res.status(200).json({ success: true, token, expiresIn: token.expires, user })
    } else {
      res.status(401).json({ success: false, msg: 'Wrong password' })
    }
  } catch (e) {
    next(e)
  }
})

router.post('/register', async (req, res, next) => {
  const { name, email, password } = req.body

  const hash = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: hash
      }
    })

    res.status(200).json({ success: true, user: user })
  } catch (e) {
    res.status(401).json({ success: false, message: 'User already exists' })
  }
})

module.exports = router
