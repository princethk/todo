const express = require('express');
const Project = require('../models/Project');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

// Create a new project
router.post('/', authMiddleware, async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

// Get all projects
router.get('/', authMiddleware, async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Get a single project by ID
router.get('/:id', authMiddleware, async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
});

// Update a project
router.put('/:id', authMiddleware, async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
});

// Delete a project
router.delete('/:id', authMiddleware, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
});

module.exports = router;
