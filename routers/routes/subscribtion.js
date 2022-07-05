const express = require('express');


const { addGymUser, addRestaruntUser, addTrainerUser, getResturantsSubscribtion, getTrainersSubscribtion, getGymsSubscribtion,getAllResturantsSubscribtion } = require('../controllers/subscribtion');
const authentication = require('../middlewares/authentication');

const subscribtionRouter = express.Router();

subscribtionRouter.post('/gym' , authentication , addGymUser );
subscribtionRouter.post('/rest' , authentication , addRestaruntUser);
subscribtionRouter.post('/trainer', authentication , addTrainerUser);
subscribtionRouter.get('/ResturantsSubscribtion' , authentication , getResturantsSubscribtion);
subscribtionRouter.get('/TrainersSubscribtion' , authentication , getTrainersSubscribtion);
subscribtionRouter.get('/GymSubscribtions' , authentication , getGymsSubscribtion);
subscribtionRouter.get('/allResturantsSubscribtion' , getAllResturantsSubscribtion);

module.exports = subscribtionRouter;






