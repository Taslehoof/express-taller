const express = require('express')
const app = express()

app.get('/',(req, res) => {

    res.sendFile('./static/index.html', {
        root:__dirname
    })

})

app.get('/about',(req, res) => {

    res.send('Acerca de ')

})

app.get('/weather',(req, res) => {

    res.send('The current weather is Nice')

})

app.use((req, res) =>{

    res.status(404).send('No se econtro tu pagina')
})

app.listen(3000)
console.log('Server opn port ${3000}')
