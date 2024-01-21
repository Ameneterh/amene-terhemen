import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());

app.listen(5050, () => {
  console.log("Server is running on Port 5050");
});

app.use("/api/auth", authRouter);
