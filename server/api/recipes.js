const express = require("express");
const router = express.Router();
const {
  fetchAllRecipes,
  fetchWorldRecipes,
  fetchRecipe,
  fetchRecipeIngredients
} = require("../db/recipes");

const {fetchInstructions} = require('../db/instructions')


//Fetch All Recipes Route
//http://localhost:8080/mythicalmunchies/recipes/
router.get("/", async (req, res, next) => {
  try {
    console.log('howdy')
    res.send(await fetchAllRecipes(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch Single World Recipes Route
//http://localhost:8080/mythicalmunchies/recipes/:world_id
router.get("/:id", async (req, res, next) => {
  try {
    console.log('all recipes one world')
    res.send(await fetchWorldRecipes(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch Single Recipe Route
//http://localhost:8080/mythicalmunchies/recipes/single/:id
router.get("/single/:id", async (req, res, next) => {
  try {
    console.log('howdy2')
    // console.log(`id: ${req.params.id}`)
    res.send(await fetchRecipe(req.params.id));

  } catch (ex) {
    next(ex);
  }
});

//Fetch recipe ingredients
//http://localhost:8080/mythicalmunchies/recipes/:recipe_id/ingredients
router.get("/ingredients/:recipe_id", async (req, res, next) => {
  try {
    res.send(await fetchRecipeIngredients(req.params.recipe_id))
  } catch (ex) {
    next(ex)
  }
});

//Fetch all ingredients

//Fetch recipe instructions 
//http://localhost:8080/mythicalmunchies/recipes/:recipe_id/instructions
router.get("/instructions/:recipe_id", async (req, res, next) => {
  try {
    // console.log(req.params.recipe_id)
    res.send(await fetchInstructions(req.params.recipe_id))
  } catch (ex) {
    next(ex)
  }
});

module.exports = router;
