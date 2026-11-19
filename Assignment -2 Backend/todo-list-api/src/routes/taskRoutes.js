const express = require('express');

const {
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const {
  validateCreateTask,
  validateUpdateTask,
  validateObjectId,
} = require('../middlewares/validation');

const router = express.Router();

router.post('/tasks', validateCreateTask, createTask);
router.put('/tasks/:id', validateObjectId, validateUpdateTask, updateTask);
router.delete('/tasks/:id', validateObjectId, deleteTask);

module.exports = router;
