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

//Create a review
//http://localhost:8080/mythicalmunchies/recipes/:review_id
// router.post("/:user_id/:review_id", async (req, res, next) => {
//   try {
//     res.send(await createUserRecipe(req.params.review_id));
//   } catch (ex) {
//     next(ex);
//   }
// });

//Fetch single user's recipes (reviews)
//http://localhost:8080/mythicalmunchies/recipes/:user_id/reviews
router.get("/:user_id/reviews", async (req, res, next) => {
  try {
    res.send(await fetchUserReviews(req.params.user_id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch single recipe's reviews 
//http://localhost:8080/mythicalmunchies/recipes/:recipe_id/reviews
router.get("/:recipe_id/reviews", async(req, res, next) => {
  try {
    res.send(await fetchRecipeReviews(req.params.recipe_id))
  } catch (ex) {
    next(ex);
  }
});

//Fetch a single review
//http://localhost:8080/mythicalmunchies/recipes/review/:review_id
router.get("/review/:review_id", async (req, res, next) => {
  try {

    res.send(await fetchReview(req.params.review_d));
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
router.get("/ingredients/:recipe_id", async (req, res, next) => {
  try {
    res.send(await fetchRecipeIngredients(req.params.recipe_id))
  } catch (ex) {
    next(ex)
  }
});

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

//Fetch recipe's tags
//http://localhost:8080/mythicalmunchies/recipes/:recipe_id/tags
router.get("/tags/:recipe_id", async(req, res, next) => {
  try {
    console.log()
    res.send(await fetchRecipeTags(req.params.recipe_id))
  } catch (ex) {
    next(ex)
  }
});

module.exports = router;
