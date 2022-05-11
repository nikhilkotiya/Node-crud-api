const express = require("express");
const app = express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");
dotenv.config();
app.use(express.json());
app.use(cors());
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology : true,useNewUrlParser:true },
    ()=> console.log("connected to db")
);  
// import routes
const productRoutes =  require("./routes/product"); 
const req = require("express/lib/request");
// route Middlewares
app.use("/api/products",productRoutes);

app.listen(4000,() => console.log("server is running on port 4000"));
