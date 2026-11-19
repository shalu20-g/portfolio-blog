const Task = require('../models/Task');

const createTask = async (req, res, next) => {
  try {
    const task = await Task.create({
      title: req.body.title.trim(),
      description:
        req.body.description === undefined ? '' : req.body.description.trim(),
      completed: req.body.completed === undefined ? false : req.body.completed,
    });

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const updates = {};

    if (req.body.title !== undefined) {
      updates.title = req.body.title.trim();
    }

    if (req.body.description !== undefined) {
      updates.description = req.body.description.trim();
    }

    if (req.body.completed !== undefined) {
      updates.completed = req.body.completed;
    }

    const task = await Task.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: task,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createTask, updateTask, deleteTask };
