require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5500;

// app.use(cors());
app.use(cors({ origin: "*" })); 
app.use(express.json());


const employeeRoutes = require("./routes/employeeRoutes");
const taskRoutes = require("./routes/taskRoutes");



app.use("/api/employees", employeeRoutes);
app.use("/api/tasks", taskRoutes);


mongoose
  .connect(
    "mongodb+srv://adinathbiradar77:JNY4uDtYvkGsY36z@cluster0.3meowad.mongodb.net/teamtaskpro?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log("MongoDB is not connected", err.message));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
