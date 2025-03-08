const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/teste', (req, res) => {
    res.send('Olá mundo')
})

app.listen(port, () => {
    console.log(`Servidor rodando em ${port}`)
})