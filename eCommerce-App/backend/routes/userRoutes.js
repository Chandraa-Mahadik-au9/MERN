import express from "express";
const router = express.Router();
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddlewares.js";

router.post("/login", authUser);
// router.route("/profile").get(protect, getUserProfile);
router.get("/profile", getUserProfile);

export default router;
