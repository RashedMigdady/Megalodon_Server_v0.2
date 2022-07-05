const express = require("express");
const authentication = require("./../middlewares/authentication");
const {
  createNewComment,
  updatecommentById,
  deleteCommentById,
  getComment,
} = require("../controllers/comment");

const commentRouter = express.Router();

commentRouter.post("/", authentication, createNewComment);

commentRouter.put("/:id", updatecommentById);

commentRouter.delete("/:id", deleteCommentById);

commentRouter.get("/", getComment);

module.exports = commentRouter;
