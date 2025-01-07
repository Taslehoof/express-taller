const { Router } = require('express');

const app = Router()

app.all('/about', (req, res) => {
    res.send('about page')
})

app.get('/dashboard', (req, res) => {
    res.send('dashboard page')
})

module.exports = app
