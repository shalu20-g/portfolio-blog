const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    throw new Error('MONGO_URI is not defined. Create a .env file from .env.example.');
  }

  await mongoose.connect(mongoURI);
  console.log('MongoDB connected');
};

module.exports = connectDB;
