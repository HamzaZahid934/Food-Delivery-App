const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://FoodDeliveryApp:Hamza80218@cluster0.y6auvtg.mongodb.net/Fooddeliveryapp?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    // Fetching Data
    const foodItemsCollection = mongoose.connection.db.collection("food-items");
    const foodItemsData = await foodItemsCollection.find({}).toArray();

    const foodCategoryCollection = mongoose.connection.db.collection("food-category");
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    global.food_items = foodItemsData;
    global.food_Category = foodCategoryData;
  }
  catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
