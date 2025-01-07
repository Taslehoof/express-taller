const { Router } = require('express');

const app = Router();

app.get('/UserName', (req, res) => {
    res.send('Username route')
})

app.get('/profile', (req, res) => {
    console.log(req.body)
    res.send('profile page')
})

module.exports = app;
