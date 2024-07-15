// Student Name: Yovan Collins
// Student ID: 1216490756
// Date: 7/14/2024

const express = require('express');
const loanController = require('../controllers/loanController');

const router = express.Router();

router
    .route('/')
    .post(loanController.createLoan)
    .get(loanController.getAllLoans)
    .delete(loanController.deleteLoanById)
    .put(loanController.updateLoans);

module.exports = router;