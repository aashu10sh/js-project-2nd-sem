const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log("Trying to Connect to the database.");
    const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/uptime`, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
