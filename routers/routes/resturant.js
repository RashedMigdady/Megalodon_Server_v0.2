const express = require("express");
const {createNewResturent,getAllResturants , updateResturantById ,deleteResturantById ,getResturantById}=require("../controllers/resturant")


const resturantRouter =express.Router()
resturantRouter.post("/",createNewResturent)
resturantRouter.get("/",getAllResturants)
resturantRouter.put("/:id",updateResturantById)
resturantRouter.delete("/:id",deleteResturantById)
resturantRouter.get("/:id",getResturantById)


module.exports=resturantRouter;