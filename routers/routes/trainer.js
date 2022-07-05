const express = require("express");
const {
  createNewTrainer,
  updateTrainerById,
  getTrainerById,
  getAllTrainer,
  deleteTrainerById,
} = require("../controllers/trainer");

const trainerRouter = express.Router();
trainerRouter.post("/", createNewTrainer);
trainerRouter.put("/:id", updateTrainerById);
trainerRouter.get("/:id", getTrainerById);
trainerRouter.get("/", getAllTrainer);
trainerRouter.delete("/:id", deleteTrainerById);

module.exports = trainerRouter;
