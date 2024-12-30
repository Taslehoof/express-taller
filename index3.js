const express = require('express')
const app = express()

app.get('/',(req, res) => {

    res.send('Hello world')

})

app.get('/miarchivo',(req, res) => {

    res.sendFile('./onlyfans.png',{
        root: __dirname
    })

})
app.listen(3000)
console.log('Server opn port ${3000}')
