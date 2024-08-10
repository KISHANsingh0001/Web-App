import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import auth from "./routes/auth.js";
import assessment from "./routes/assessment.js";
import admin from "./routes/adminauth.js";
import consultation from "./routes/consultation.js";
import "./dbconnect.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./dist")));

app.use("/api", auth);
app.use("/api", assessment);
app.use("/api/admin", admin);
app.use("/api", consultation);

// Serve the index.html for any unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
