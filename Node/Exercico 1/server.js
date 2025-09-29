const express = require('express');
const app = express();
const port = 3000;

let tasks = [
    {id: 1, titulo: 'Estudar express', concluida: 'false'}
    {id: 2, titulo: 'Estudar nodejs', concluida: 'true'}
]

app.get('/', (req, res) => {
    res.send("olaasdfasdfa")
})

app.listen(port, () => {
    console.log(`Servidor rodando \n https:\\localhost:${port}`)
})