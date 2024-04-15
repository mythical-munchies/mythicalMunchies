const express = require("express");
const router = express.Router();
const {
  fetchAllRecipes,
  fetchWorldRecipes,
  fetchRecipe,
} = require("../db/recipes");


//Fetch All Recipes Route
//http://localhost:8080/mythicalmunchies/recipes/
router.get("/", async (req, res, next) => {
  try {
    res.send(await fetchAllRecipes(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch Single World Recipes Route
//http://localhost:8080/mythicalmunchies/recipes/:world_id
router.get("/:world_id", async (req, res, next) => {
  try {
    res.send(await fetchWorldRecipes(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch Single Recipe Route
//http://localhost:8080/mythicalmunchies/recipes/:id
router.get("/:id", async (req, res, next) => {
  try {
    res.send(await fetchRecipe(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
