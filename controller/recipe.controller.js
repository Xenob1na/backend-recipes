import { RecipeModel } from "../models/recipe.model.js";

export const getRecipes = async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    res.status(200).json({message: "All recipes", recipes});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await RecipeModel.findById(id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  try {
    const {
      userId,
      title,
      description,
      ingredients,
      steps,
      category,
      сomplexity,
      cookingTime,
    } = req.body;
    const image = req.file.filename;

    const newRecipe = new RecipeModel({
      userId,
      title,
      description,
      ingredients,
      steps,
      category,
      сomplexity,
      cookingTime,
      image,
    });

    const savedRecipe = await newRecipe.save();

    return res.status(200).json({ message: "Recipe created", savedRecipe });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
