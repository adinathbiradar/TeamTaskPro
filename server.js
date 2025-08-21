require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5500; // ✅ use Render's port if available

// ✅ Allow only Netlify frontend to access backend
app.use(
  cors({
    origin: "https://teamtaskpro.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/api/employees", employeeRoutes);
app.use("/api/tasks", taskRoutes);

// ✅ MongoDB connection (already correct)
mongoose
  .connect(process.env.MONGO_URI) // move URI to .env for security
  .then(() => console.log("✅ MongoDB is connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err.message));

app.get("/", (req, res) => {
  res.send("🚀 TeamTaskPro Backend is running!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
