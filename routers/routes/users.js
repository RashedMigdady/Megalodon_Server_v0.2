const express = require("express");
const authentication = require("../../routers/middlewares/authentication");
const { updateUserById,getInfo } = require("../controllers/users");

const usersRouter = express.Router();
usersRouter.get("/", authentication, getInfo)
usersRouter.put("/", authentication, updateUserById);

module.exports = usersRouter;
