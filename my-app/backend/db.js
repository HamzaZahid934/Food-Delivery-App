const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FoodDeliveryApp:Hamza80218@cluster0.y6auvtg.mongodb.net/?retryWrites=true&w=majority';

const MongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = MongoDB;
