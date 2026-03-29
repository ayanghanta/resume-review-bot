import express from "express";
import {
  analyseResume,
  uploadResume,
} from "../controllers/resumeAnalyseController.js";

const router = express.Router();

router.route("/").post(uploadResume, analyseResume);

export default router;
