const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FoodDeliveryApp:Hamza80218@cluster0.y6auvtg.mongodb.net/Fooddeliveryapp?retryWrites=true&w=majority'

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    //Fetching Data
    const fetched_data = mongoose.connection.db.collection("food-items");
    const data = await fetched_data.find({}).toArray();
    //console.log(data);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB;
