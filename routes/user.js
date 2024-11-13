const express = require('express');
const { handleGetAllUser, GetUserById, putUser, DeleteUser, CreateUserbyPost } = require('../controller/user');
const router = express.Router();
const users = require('../models/user.js'); // Import your User model

// Routes
router.get('/', (req, res) => {
    const html = `<ul>${users.map((user) => `<li>${user.first_name}</li>`)}</ul>`;
    res.send(html);
});

// REST API Routes
router.get('/', handleGetAllUser);
router.post('/', CreateUserbyPost);

router
    .route('/:id')
    .get(GetUserById)
    .put(putUser)
    .delete(DeleteUser);

module.exports = router; // Export router directly
