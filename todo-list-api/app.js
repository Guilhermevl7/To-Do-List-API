const express = require("express");
const connectToDb = require("./database/db");
const taskRoutes = require('./routes/taskRoutes');
const tagRoutes = require('./routes/tagRoutes')

const app = express();
const port = 3000;

connectToDb();


app.use(express.json());

app.use('/api', taskRoutes);
app.use('/api', tagRoutes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
