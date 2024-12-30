const express = require('express')
const app = express()

app.get('/hello/:username', (req, res) => {
    res.send(`Hello ${req.params.username}`)
})

app.listen(3000)
console.log(`Server on port ${3000}`)
