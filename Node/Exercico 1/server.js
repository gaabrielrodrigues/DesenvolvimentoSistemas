const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

let tasks = [
    { id: 1, titulo: 'Estudar express', concluida: false },
    { id: 2, titulo: 'Estudar nodejs', concluida: true }
];

let nextId = 3

app.get('/tarefas', (req, res) => {
    res.send(tasks);
});
app.get('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const task = tasks.find(t => t.id === id)

    if(!task) {
        res.status(404).send("Task not founded :/")
    }
    res.send(task)
});

app.post('/tarefas', (req, res) => {
    let {titulo} = req.body;
    let task = {id: nextId, titulo: titulo, concluida: false}

    nextId++

    tasks.push(task)
    res.status(201).send(task);
})

app.put("/tarefas/:id", (req, res) => {
    const id = parseInt(req.params.id)
    let task = req.body;

    task.id = id;
    let index = tasks.findIndex(t => t.id === id);
    if(index == -1) {
        res.status(404).send("Task not founded :/")
    }
    tasks[index] = task
    res.status(204).send()
})

app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let index = tasks.findIndex(t => t.id === id)

    if( index == -1) {
        return res.status(404)
    }

    tasks.splice(index, 1)
    res.status(204).send()
})


app.listen(port, () => {
    console.log(`Servidor rodando \n http://localhost:${port}`);
});
