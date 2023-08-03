// Create web server application using Express.js framework
// Handles all requests related to comments
// Comments are stored in a JSON file

// Import the Express.js framework
const express = require('express');
const router = express.Router();

// Import the file system module
const fs = require('fs');

// Import the path module
const path = require('path');

// Import the comments JSON file
const comments = require('../data/comments.json');

// Import the comments JSON file
const movies = require('../data/movies.json');

// Import the body parser module
const bodyParser = require('body-parser');

// Import the data validator module
const { check, validationResult } = require('express-validator');

// Import the data validator module
const { sanitizeBody } = require('express-validator');

// Set up body parser
router.use(bodyParser.urlencoded({ extended: true }));

// Set up the path to the comments JSON file
const commentsPath = path.join(__dirname, '../data/comments.json');

// Set up the path to the movies JSON file
const moviesPath = path.join(__dirname, '../data/movies.json');

// Set up the path to the comments JSON file
const commentsPath = path.join(__dirname, '../data/comments.json');

// Set up the path to the movies JSON file
const moviesPath = path.join(__dirname, '../data/movies.json');

// GET request to display all comments
router.get('/', (req, res) => {
    res.json(comments);
});

// GET request to display a single comment
router.get('/:id', (req, res) => {
    const commentId = req.params.id;
    const foundComment = comments.find(comment => comment.id === commentId);
    res.json(foundComment);
});

// POST request to add a comment
router.post('/', [
    check('comment').isLength({ min: 3 }),
    check('movie_id').isLength({ min: 3 }),
    check('user_id').isLength({ min: 3 }),
    check('date').isLength({ min: 3 }),
    check('rating').isLength({ min: 3 }),
    check('id').isLength({ min: 3 }),
    check('comment').isLength({ min: 3 }),
    check('movie_id').isLength({ min: 3 }),
    check('user_id').isLength({ min: 3 }),
    check('date').isLength({ min: 3 }),
    check('rating
