const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const jwt = require('jsonwebtoken');


// Middleware to authenticate user
const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('No token, authorization denied');
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send('Token is not valid');
    }
};

// CRUD Operations
router.post('/', auth, async (req, res) => {
    const { title, description, dueDate, priority, category } = req.body;

    // Basic validation
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    if (!priority) {
        return res.status(400).json({ error: 'Priority is required' });
    }
    if (!category) {
        return res.status(400).json({ error: 'Category is required' });
    }

    try {
        const newTask = new Task({
            userId: req.user.id,
            title,
            description,
            dueDate,
            priority,
            category
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: 'Validation error', details: err.message });
        }
        res.status(500).json({ error: 'Server error', details: err.message });
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.put('/:id', auth, async (req, res) => {
    const { title, description, dueDate, priority, completed, category } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { title, description, dueDate, priority, completed, category }, { new: true });
        res.status(200).json(task);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).send('Task deleted');
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;





module.exports = router;