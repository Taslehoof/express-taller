const { Router } = require('express');

const app = Router();

app.get('/users', (req, res) => {
    res.render('users')
})

module.exports = app;
