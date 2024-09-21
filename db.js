// const mongoose = require("mongoose");

// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };

require("dotenv").config();
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
	try {
        const uri = process.env.MONGO_URI;
        console.log('MongoDB URI:', uri); // Log the URI to check its value
        if (!uri) {
            throw new Error('MONGODB_URI is not defined. Please check your .env file.');
        }
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
