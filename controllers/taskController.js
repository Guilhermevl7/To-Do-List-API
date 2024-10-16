const Task = require('../models/task');

//Criar tarefa 
const createTask = async (req, res) => {
    try {
        const task = new Task({ ...req.body , user: req.userId });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar tarefa', error: error.message});
    }
};

//Listar e filtrar tarefas 
const getTasks = async (req, res) =>{
    try {
        let query = { user: req.userId };
        if (req.query.tags) {
            query.tags = {$in: req.query.tags.split(',')};
        }
        const tasks = await Task.find(query).populate('tags');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tarefas', error: error.message });  
    }
};

//Atualizar tarefa
const updateTask = async (req, res) =>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar tarefa', error: error.message });
    }
};

//Deletar tarefa
const deleteTask = async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: 'Erro ao deletar tarefa', error: error.message });
    }
  };

module.exports = { createTask, getTasks, updateTask, deleteTask };