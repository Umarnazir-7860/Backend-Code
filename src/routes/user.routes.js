import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; // Importing upload middleware

console.log("✅ RegisterUser Function Loaded:", registerUser);  // Debugging

const router = Router();

// Correct route setup with middleware
router.route("/register").post(
  upload.fields([   // This middleware handles file uploads
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1
    }
  ]),
  registerUser  // Register user route function as last handler
);

console.log("✅ user.routes.js Loaded");
console.log("✅ Register User Function:", registerUser);

export default router;
