// Student Name: Yovan Collins
// Student ID: 1216490756
// Date: 7/14/2024

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
    .route('/')
    .post(userController.createUser)
    .get(userController.getAllUsers)
    .delete(userController.deleteUserById)
    .put(userController.updateUsers);

module.exports = router;