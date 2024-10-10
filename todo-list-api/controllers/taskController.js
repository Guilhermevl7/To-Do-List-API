const Task = require('../models/task');

//Criar tarefa 
const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar tarefa', error: error.message});
    }
};

//Listar e filtrar tarefas 
const getTasks = async (req, res) =>{
    try {
        let query = {};
        if (req.query.tags) {
            query.tags = {$in: req.query.tags.split(',')};
        }
        const tasks = await Task.find(query).populate('tags');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tarefas', error: error.message });  
    }
};

module.exports = { createTask, getTasks };