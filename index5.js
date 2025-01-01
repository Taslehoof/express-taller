const express = require('express')
const app = express()

//Queries
app.get('/search', (req, res) => {
    if ( req.query.q === 'javascript books') {
        res.send('Lista de libros de Javascript')
    } else {
        res.send('Pagina normal')
    }
})

//Params => Parametros
app.get('/hello/:username', (req, res) => {
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

// Params + foto
app.get('/users/:username/photo', (req, res) => {
    if (req.params.username === 'tasle') {
        return res.sendFile('./onlyfans.png',{
            root: __dirname
        })
    }
    res.send('El usuaro no tiene acceso')
})

//Mas de un Params en la ruta
app.get('/name/:name/age/:age', (req,res) => { 
    res.send(`El usuario ${req.params.name} tiene ${req.params.age}`)
})

app.listen(3000)
console.log(`Server on port ${3000}`)
