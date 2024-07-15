// Student Name: Yovan Collins
// Student ID: 1216490756
// Date: 7/14/2024

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const loggerMiddleware = ('./loggerMiddleware');

const app = express();

// Middleware to parse JSON
app.use(express.json());

//Middleware to log (console log string currently)
app.use(loggerMiddleware);

// Importing routes
const loanRoutes = require('./routes/loanRoutes');
const userRoutes = require('./routes/userRoutes');

// Setting up routes
app.use('/api/v1/loans', loanRoutes);
app.use('/api/v1/users', userRoutes);

// Connecting to MongoDB. The connection string details will be using the config.env or .env environment variables
const DB = process.env.DATABASE.replace('<DB_PASSWORD>', process.env.DB_PASSWORD);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection successful'));

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});