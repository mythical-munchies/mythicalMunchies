const express = require("express");
const router = express.Router();

const {fetchRecipeTags, fetchTags, fetchTaggedRecipes} = require('../db/tags');

//Fetch all tags
//http://localhost:8080/mythicalmunchies/tags/
router.get("/", async(req, res, next) => {
  try {
    console.log()
    res.send(await fetchTags());
  } catch (ex) {
    next(ex);
  }
});

//Fetch a recipe's tags
//http://localhost:8080/mythicalmunchies/tags/recipe/:recipe_id
router.get("/recipe/:recipe_id", async(req, res, next) => {
  try {
    console.log()
    res.send(await fetchRecipeTags(req.params.recipe_id))
  } catch (ex) {
    next(ex)
  }
});

//Fetch tagged recipes
//http://localhost:8080/mythicalmunchies/tags/:tag_id
router.get("/:tag_id", async(req, res, next) => {
  try {
    console.log()
    res.send(await fetchTaggedRecipes(req.params.tag_id))
  } catch (ex) {
    next(ex)
  }
});

module.exports = router;