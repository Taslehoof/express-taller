const express = require('express')
const app = express()

app.get('/hello/:username', (req, res) => {
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

app.listen(3000)
console.log(`Server on port ${3000}`)
