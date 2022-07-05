const express = require("express");
const { login ,loginGoogle,restPassword} = require("../../controllers/auth/login");

// define router
const loginRouter = express.Router();

// 			routes
//post  http://localhost:5000/login/
loginRouter.post("/login", login);
loginRouter.post("/login/loginGoogle", loginGoogle);
loginRouter.post("/login/restPass", restPassword);
module.exports = loginRouter;
