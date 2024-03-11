import express from "express";
import multer from "multer";
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

import { createRecipe, getRecipes } from "../controller/recipe.controller.js";

const router = express.Router();

router.post("/createRecipe", upload.single("image"), createRecipe);
router.get("/getRecipes", getRecipes);

export default router;
