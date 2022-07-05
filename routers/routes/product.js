const express = require("express");
const { createNewProduct, updateByID, deleteByName, getAllProducts } = require("../controllers/product");



const productsRouter = express.Router();

productsRouter.post("/", createNewProduct);
productsRouter.put('/:id' , updateByID);
productsRouter.delete('/:id' , deleteByName )
productsRouter.get('/' , getAllProducts);

module.exports = productsRouter;
