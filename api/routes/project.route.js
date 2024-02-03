import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  getprojects,
  updateproject,
} from "../controllers/project.controller.js";
// import {
//   deletepost,
// } from "../controllers/project.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getprojects", getprojects);
router.put("/updateproject/:projectId/:userId", verifyToken, updateproject);
// router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);

export default router;
