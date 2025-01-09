const { Router } = require('express');
const axios = require('axios')

const app = Router()

app.get('/', (req, res) => {
    let isActive = false

    const users = [
        {
            id: 1,
            name: "ryan",
            lastname: "perez"
        },
        {
            id: 2,
            name: "joe",
            lastname: "mc millan"
        }
    ]

    res.render('index', {
        title: 'Index page',
        isActive
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/post',async (req, res) => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    res.render('post',{
        post: response.data
    })
})

module.exports = app
