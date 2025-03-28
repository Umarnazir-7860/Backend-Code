import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";


const router = Router();
router.post("/register", registerUser);  // POST method confirm kar le
export default router;
