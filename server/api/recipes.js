const express = require("express");
const router = express.Router();
const {
  fetchAllRecipes,
  fetchWorldRecipes,
  fetchRecipe,
  fetchRecipeIngredients
} = require("../db/recipes");
const {createUserRecipe,
  deleteReview,
  fetchUserReviews,
  fetchRecipeReviews,
  fetchReview 
} = require('../db/users')
const {fetchInstructions} = require('../db/instructions')
const {fetchRecipeTags} = require('../db/tags')

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

//Create a review
//http://localhost:8080/mythicalmunchies/recipes/:review_id
router.post("/:user_id/:review_id", async (req, res, next) => {
  try {
    res.send(await createUserRecipe(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch single user's recipes (reviews)
//http://localhost:8080/mythicalmunchies/recipes/:user_id/reviews
router.get("/:user_id/reviews", async (req, res, next) => {
  try {
    res.send(await fetchUserReviews(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch single recipe's reviews 
//http://localhost:8080/mythicalmunchies/recipes/:recipe_id/reviews
router.get("/:recipe_id/reviews", async(req, res, next) => {
  try {
    res.send(await fetchRecipeReviews(req.params.id))
  } catch (ex) {
    next(ex);
  }
});

//Fetch a single review
//http://localhost:8080/mythicalmunchies/recipes/:review_id
router.get("/:user_id/:review_id", async (req, res, next) => {
  try {
    res.send(await fetchReview(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

//Update a review not working
//http://localhost:8080/mythicalmunchies/recipes/:review_id
// router.put('/:user_id/:review_id', async (req, res, next) => {
//   try {
//     res.send(await updateReview(req.params.id))
//   } catch(ex) {
//     next(ex);
//   }
// })

//Delete review
//http://localhost:8080/mythicalmunchies/recipes/:review_id
router.delete("/:user_id/:review_id", async (req, res, next) => {
  try {
    res.send(await deleteReview(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch recipe ingredients
//http://localhost:8080/mythicalmunchies/recipes/:recipe_id/ingredients
router.get("/:recipe_id/ingredients", async (req, res, next) => {
  try {
    res.send(await fetchRecipeIngredients(req.params.id))
  } catch (ex) {
    next(ex)
  }
});

//Fetch recipe instructions 
//http://localhost:8080/mythicalmunchies/recipes/:recipe_id/instructions
router.get("/:recipe_id/instructions", async (req, res, next) => {
  try {
    res.send(await fetchInstructions(req.params.id))
  } catch (ex) {
    next(ex)
  }
});

//Fetch recipe's tags
//http://localhost:8080/mythicalmunchies/recipes/:recipe_id/tags
router.get("/:recipe_id/tags", async(req, res, next) => {
  try {
    res.send(await fetchRecipeTags(req.params.id))
  } catch (ex) {
    next(ex)
  }
});

module.exports = router;
