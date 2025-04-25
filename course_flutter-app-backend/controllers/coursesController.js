const Course = require('../models/Course');

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.getAll();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create course
exports.createCourse = async (req, res) => {
  try {
    const { title, description, teacher } = req.body;
    const newCourse = await Course.create(title, description, teacher);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update course
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, teacher } = req.body;
    await Course.update(id, title, description, teacher);
    res.status(200).json({ message: 'Course updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.delete(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};