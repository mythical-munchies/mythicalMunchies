const express = require("express");
const router = express.Router();

const {createUserRecipe,
  deleteReview,
  fetchUserReviews,
  fetchRecipeReviews,
  fetchReview 
} = require('../db/users')

// Create a review
// http://localhost:8080/mythicalmunchies/reviews/:review_id
// router.post("/:review_id", async (req, res, next) => {
//   try {
//     const token = req.headers.authorization

//     // console.log(token)
//     if (!token) {
//       res.send('Please log in!')
//     } else {
//       res.send(await createUserRecipe(req.params.review_id));
//     }
//   } catch (ex) {
//     next(ex);
//   }
// });

//Fetch a single review
//http://localhost:8080/mythicalmunchies/reviews/:review_id
// router.get("/:review_id", async (req, res, next) => {
//   try {
//     const token = req.headers.authorization
//     if 
//     // console.log(token)
//     res.send(await fetchReview(req.params.review_id));
//   } catch (ex) {
//     next(ex);
//   }
// });

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
router.delete("/:review_id", async (req, res, next) => {
  try {
    res.send(await deleteReview(req.params.id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch single user's recipes (reviews)
//http://localhost:8080/mythicalmunchies/reviews/user/:user_id/reviews
router.get("/user/:user_id", async (req, res, next) => {
  try {
    res.send(await fetchUserReviews(req.params.user_id));
  } catch (ex) {
    next(ex);
  }
});

//Fetch single recipe's reviews 
//http://localhost:8080/mythicalmunchies/reviews/recipe/:recipe_id
router.get("/recipe/:recipe_id", async(req, res, next) => {
  try {
    res.send(await fetchRecipeReviews(req.params.recipe_id))
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;