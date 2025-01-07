const express = require('express');
const morgan = require('morgan')
const path = require('path')
const ejs = require('ejs')

const app = express();

const HomeRoutes = require('./routes/index')
const UserRoutes = require('./routes/users')

//settings
app.set('appName', 'Express Course')
app.set('port', 3020)
app.set('case sensitive routing', true)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middlewares
app.use(express.json())
app.use(morgan('dev'))

app.use(HomeRoutes)
app.use(UserRoutes)

app.get('/note.txt', (req, res) => {
    res.send('este no es un archivo')
})

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

//middleware de validacion para poder agregarle una capa de seguridad a las rutas
app.use((req, res, next) => {
    if(req.query.login === 'seracon@gmail.com') {
        next()
    } else {
        res.send('No autorizado')
    }
})


app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);
