const Product = require("../model/Product");


// GET All Product
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).send(products);
      } catch (error) {
        res.json({ message: error });
      }
};
// Single Product 
const product_details = async (req,res)=>{
    try{
        const product = await Product.findById(req.params.ProductId);
        res.json(product);
    } catch (error){
        res.json({message:error});
    } 
};
// Add New Product
// Add New product
const product_create = async (req, res) => {
      try {
        const product = new Product(req.body);
        console.log(req.body)
        const savedProduct = await product.save();
        res.status(201).send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update product
const product_update = async (req, res) => {
    try {
        const product = {
          title: req.body.title,
          price: req.body.price,
          image: req.body.image,
          details: req.body.details
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    product_all, 
    product_details, 
    product_create, 
    product_update, 
    product_delete
  }