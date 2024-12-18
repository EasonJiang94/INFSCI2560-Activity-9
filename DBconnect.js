const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = { connectDB };
