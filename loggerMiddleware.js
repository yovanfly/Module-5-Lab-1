// Student Name: Yovan Collins
// Student ID: 1216490756
// Date: 7/14/2024

const loggerMiddleware = (req, res, next) => {
    console.log('Middleware has been hit. logging....');
    next();
};

module.exports = loggerMiddleware;