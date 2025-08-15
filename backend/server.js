import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post("/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("App is working");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port:", PORT);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to DB, server not started", error);
  });

