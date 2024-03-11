import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import multer from "multer";

import authRouter from "./routers/auth.router.js";
import recipeRouter from "./routers/recipe.router.js";


import "dotenv/config";

const app = express();

// Middleware

app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/recipe", recipeRouter);



app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:3000",
    "https://localhost:5000"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({ message: "Hello World! 🚀🚀🚀" });
});

app.listen(process.env.APP_PORT, () => {
  console.log("Listening on port " + process.env.APP_PORT);
});
