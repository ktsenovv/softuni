const mongoose = require('mongoose');
require('../models/User');
require('../models/Item');

// Database Settings
const dbHost = 'localhost';
const dbPort = '27017';
const dbName = 'exam2';

const connectionString = `mongodb://${dbHost}:${dbPort}/${dbName}`;

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        });
    } catch (err) {
        console.err('Error connecting to database');
        process.exit(1);
    }
};