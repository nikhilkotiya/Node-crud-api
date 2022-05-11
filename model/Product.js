const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title:{
    type:String,
    required:false,
   unique:false 
  },
  price: 
  {
    type:Number,
    required:false
  },
  image: String,
  details: String
});

module.exports = mongoose.model("Product", productSchema);