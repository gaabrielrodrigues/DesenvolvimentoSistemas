const express = riquere('express')
const app = express()
const port = 2000;

app.use(express.json())


app.listen(port, () => {
    console.log(`Servidor rodando \n http://localhost:${port}`);
});
