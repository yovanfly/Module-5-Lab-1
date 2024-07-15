// Student Name: Yovan Collins
// Student ID: 1216490756
// Date: 7/14/2024

const Loan = require('../models/loanModel');

// Create a new loan application
exports.createLoan = async (req, res) => {
    try {
        const loan = await Loan.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                loan,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Get all loan applications
exports.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find();
        res.status(200).json({
            status: 'success',
            results: loans.length,
            data: {
                loans,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Update Loans
exports.updateLoans = async (req, res) => {
    try {
        const loans = await Loan.updateLoans();
        res.status(200).json({
            status: 'success',
            results: loans.length,
            data: {
                loans,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Delete loans by Id
exports.deleteLoanById = async (req, res) => {
    try {
        const loans = await Loan.deleteLoanById();
        res.status(200).json({
            status: 'success'
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};