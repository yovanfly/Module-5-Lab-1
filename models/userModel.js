// Student Name: Yovan Collins
// Student ID: 1216490756
// Date: 7/14/2024

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true,
        lowercase: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;