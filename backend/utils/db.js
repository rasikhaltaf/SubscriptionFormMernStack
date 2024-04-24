const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

// mongoose.connect(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connetion successfull to Database");
  } catch (error) {
    console.log("Database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
