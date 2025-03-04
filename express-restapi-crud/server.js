const express = require('express')
const morgan =require('morgan')

const app = express()
let products = [
    {
        id: 1,
        name: "laptop",
        price: 3000
    }
]

app.use(morgan('dev'))
app.use(express.json())

app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res) => {
    const newProducts ={ ...req.body,id:products.length}
    products.push(newProducts)
    res.send(newProducts)
})

app.put('/products/:id', (req, res) => {
    const newData = req.body
    const productFound = products.find(function (product){
        return product.id == req.params.id
    })

    if(!productFound) return res.status(404).json({
        message: "Product not found"
    })

    products = products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p)
    
    res.json({
        message: "Product update Successfully"
    })
})


app.delete('/products/:id', (req, res) => {
    const productFound = products.find(function (product){
        return product.id == req.params.id
    })

    if(!productFound) return res.status(404).json({
        message: "Product not found"
    })

    products = products.filter(p => p.id !==  parseInt(req.params.id))
    
    res.sendStatus(204)
})

app.get('/products/:id', (req, res) => {
    console.log(req.params.id)
    const productFound = products.find(function (product){
        return product.id == req.params.id
    })

    if(!productFound) return res.status(404).json({
        message: "Product not found"
    })

    res.json(productFound)
})

app.listen(3000)
console.log(`server on port ${3000}`)
