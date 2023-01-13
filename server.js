const express = require('express')
const path = require(`path`)
const app = express()
require(`dotenv`).config()
const {ROLLBAR_TOKEN} = process.env

app.use(express.static(`${__dirname}/public`))


var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: ROLLBAR_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log(`Hello World!`)


app.get('/api/cat', (req, res) => {
    rollbar.info(`Cat name requested`)
    res.send('barb')
})


app.listen(4000, () => {
    console.log(`server running on port 4000`)
})