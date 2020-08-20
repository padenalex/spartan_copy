const express = require('express')
const cors = require('cors')
const passport = require('passport')

const app = express()

require('./config/database')
require('./config/passport')(passport)

app.use(passport.initialize())
app.use(express.json())
app.use(cors())
app.use(require('./routes'))

app.listen(2000)
