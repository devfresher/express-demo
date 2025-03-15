const mongoose = require('mongoose');
const serverConfig = require('../config/serverConfig');

const connectDB = async () => {
	await mongoose.connect(serverConfig.dbUrl);
};

module.exports = connectDB;
