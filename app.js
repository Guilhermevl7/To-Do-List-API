
const express = require("express");
const connectToDb = require("./database/db");

require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');
const tagRoutes = require('./routes/tagRoutes');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes')

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY; 

connectToDb(process.env.DATABASE_URL);


app.use(express.json());

app.use('/api', taskRoutes);
app.use('/api', tagRoutes);
app.use('/api', loginRoutes);
app.use('/api', registerRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
