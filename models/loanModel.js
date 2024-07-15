// Student Name: Yovan Collins
// Student ID: 1216490756
// Date: 7/14/2024

const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    applicantName: {
        type: String,
        required: [true, 'An applicant name is required'],
    },
    loanAmount: {
        type: Number,
        required: [true, 'A loan amount is required'],
    },
    loanPurpose: {
        type: String,
        required: [true, 'A loan purpose is required'],
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;