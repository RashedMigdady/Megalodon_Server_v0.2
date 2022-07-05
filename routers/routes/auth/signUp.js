const express = require("express");
const { createNewUser } = require("../../controllers/auth/signUp");

const registerRouter = express.Router();

registerRouter.post("/", createNewUser);

module.exports = registerRouter;
