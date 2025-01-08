const { Router } = require('express');

const app = Router()

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Index page'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = app
