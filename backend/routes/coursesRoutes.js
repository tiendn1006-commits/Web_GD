const express = require('express');
const router = express.Router();
const { getCourses, getCourseById } = require('../controllers/coursesController');

// Get all courses with pagination
router.get('/', getCourses);

// Get course by ID
router.get('/:id', getCourseById);

module.exports = router;
