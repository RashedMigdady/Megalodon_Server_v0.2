const express = require("express");
const { LookUpsIdCountries, LookUpsIdSports } = require('../../controllers/LookUpsIds/LookUpsIds');
const authentication = require("../../../routers/middlewares/authentication");

const LookUpsIdsRouter = express.Router();
LookUpsIdsRouter.get('/Countries/:lookUpId',authentication, LookUpsIdCountries);
LookUpsIdsRouter.get('/Sports/:lookUpId', authentication, LookUpsIdSports);

module.exports = LookUpsIdsRouter;
