const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MURI);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDb;
