const express = require('express');
const morgan = require('morgan')
const path = require('path')

const app = express();

//settings
app.set('appName', 'Express Course')
app.set('port', 3020)
app.set('case sensitive routing', true)

//middlewares
app.use(express.json())
app.use(morgan('dev'))

app.get('/note.txt', (req, res) => {
    res.send('este no es un archivo')
})

console.log(__dirname)

//Routes statics
app.use("/static",express.static(path.join(__dirname,'./static')))
app.use("/public",express.static(path.join(__dirname,'./public')))

//middleware
//app.use((req, res, next) => {
//    console.log(`Route: ${req.url} Metodo: ${req.method}`)
//
//    next()
//})

//routes
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


app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);
