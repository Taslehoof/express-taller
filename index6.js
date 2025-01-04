const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(express.json())
app.use(morgan('dev'))

//middleware
//app.use((req, res, next) => {
//    console.log(`Route: ${req.url} Metodo: ${req.method}`)
//
//    next()
//})

app.get('/profile', (req, res) => {
    console.log(req.body)
    res.send('profile page')
})

app.all('/about', (req, res) => {
    res.send('about page')
})

//middleware de validacion para poder agregarle una capa de seguridad a las rutas
app.use((req, res, next) => {
    if(req.query.login === 'seracon@gmail.com') {
        next()
    } else {
        res.send('No autorizado')
    }
})

app.get('/dashboard', (req, res) => {
    res.send('dashboard page')
})


app.listen(3000);
console.log(`Server on port ${3000}`);
