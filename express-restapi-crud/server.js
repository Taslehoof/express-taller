const express = require('express')
const morgan =require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/products', (req, res) => {
    res.send('obtenendo productos')
})

app.post('/products', (req, res) => {
    res.send('creando poductos')
})

app.put('/products', (req, res) => {
    res.send('actualizando productos')
})

app.get('/products', (req, res) => {
    res.send('obtenendo productos')
})

app.delete('/products', (req, res) => {
    res.send('eliminando productos')
})

app.get('/products/:id', (req, res) => {
    res.send('obteniendo un productos')
})

app.listen(3000)
console.log(`server on port ${3000}`)
