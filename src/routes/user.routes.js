

import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload } from "../middlewares/upload.js"; // Importing upload middleware
console.log("✅ RegisterUser Function Loaded:", 
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1
        }
        
    ]),
    registerUser);  // Debugging ke liye

const router = Router();
router.route("/register").post(registerUser); // Register user route

console.log("✅ user.routes.js Loaded");
console.log("✅ Register User Function:",registerUser);
                            


export default router;
