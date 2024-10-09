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

module.exports = { createTask };