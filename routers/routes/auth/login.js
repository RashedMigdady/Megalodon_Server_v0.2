const express = require("express");
const { login ,loginGoogle,restPassword} = require("../../controllers/auth/login");

const loginRouter = express.Router();

//post  http://localhost:5000/login/
loginRouter.post("/", login);
loginRouter.post("/login/loginGoogle", loginGoogle);
loginRouter.post("/login/restPass", restPassword);
module.exports = loginRouter;
