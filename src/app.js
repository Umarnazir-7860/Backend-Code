import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import userRoutes from "./routes/user.routes.js";

// Route declaration
app.use("/api/v1/users", userRoutes);  

// 🔹 Debugging ke liye yeh code add kiya hai
app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
        console.log(`✅ Registered route: ${r.route.path}`);
    }
});


export default app;
