const express = require("express");
const authentication = require("../../routers/middlewares/authentication");
const { addCart,deleteCart } = require("../controllers/cart");

const cartRouter = express.Router();
cartRouter.post("/", authentication, addCart)
cartRouter.delete("/", authentication, deleteCart)

module.exports = cartRouter;