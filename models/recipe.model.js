import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "http://via.placeholder.com/500x180?text=No%20Image",
    },
    ingredients: [
      {
        amount: {
          type: String,
          required: false,
        },
        title: {
          type: String,
          required: true,
        },
      },
    ],
    steps: {
      type: Array,
    },
    category: {
      type: Array,
    },
    сomplexity: {
      type: String,
    },
    cookingTime: {
      type: String,
    },
    isModerated: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const RecipeModel = mongoose.model("Recipe", RecipeSchema);
