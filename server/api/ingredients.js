const express = require("express");
const router = express.Router();
const {fetchRecipeIngredients} = require("../db/ingredients")

//Fetch recipe ingredients
//http://localhost:8080/mythicalmunchies/ingredients/:recipe_id
router.get("/:recipe_id", async (req, res, next) => {
  try {
    res.send(await fetchRecipeIngredients(req.params.recipe_id))
  } catch (ex) {
    next(ex)
  }
});

module.exports = router;