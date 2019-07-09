const express = require('express')
const app = express()

const config = require('./config')

config.useMiddleware(app)
config.mongo_connect()

app.use('/test', require('./routes/test'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))