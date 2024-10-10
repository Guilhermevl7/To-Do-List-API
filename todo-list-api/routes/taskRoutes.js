const express = require('express');
const { createTask, getTasks, updateTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getTasks);
router.put('/tasks/:id', updateTask)

module.exports = router; 