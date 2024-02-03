import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create, getprojects } from "../controllers/project.controller.js";
// import {
//   create,
//   deletepost,
//   getposts,
//   updatepost,
// } from "../controllers/project.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getprojects", getprojects);
// router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);
// router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

export default router;
