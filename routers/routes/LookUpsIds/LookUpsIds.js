const express = require("express");
const { LookUpsIdCountries } = require('../../controllers/LookUpsIds/LookUpsIds');
const authentication = require("../../../routers/middlewares/authentication");

const LookUpsIdsRouter = express.Router();
LookUpsIdsRouter.get('/Countries/:lookUpId',authentication, LookUpsIdCountries);

module.exports = LookUpsIdsRouter;
