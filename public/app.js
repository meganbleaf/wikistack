const express = require('express')
const app = express()
const morgan = require('morgan')
const layout = require('../views/layout.js')
const PORT = 3000

app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: false }));
//const bodyParser = require('body-parser')


app.get('/', (req, res) => {
    let log = console.log("hello world")
    let page = layout("");
    res.send(page);
})

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
})