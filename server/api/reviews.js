const express = require('express');
const router = express.Router();

const {
	createUserRecipe,
	deleteReview,
	fetchUserReviews,
	fetchRecipeReviews,
	fetchReview,
} = require('../db/users');

// Create a review
// http://localhost:8080/mythicalmunchies/reviews/
router.post('/', async (req, res, next) => {
	// console.log('made it to review route');
	if (!req.user) {
		res.status(401);
		// console.log('made it to not user');
		next({
			name: 'MissingUserError',
			message: 'You must be logged in to perform this action',
		});
	} else {
	try {
		console.log(req.body);
		res.send(await createUserRecipe(req.body));
		// }
	} catch (ex) {
		next(ex);
	}
}
});

//Fetch a single review
//http://localhost:8080/mythicalmunchies/reviews/:id
router.get('/:id', async (req, res, next) => {
	try {
		// console.log(token)
			res.send(await fetchReview(req.params.id));
	} catch (ex) {
		next(ex);
	}
});

//Delete review
//http://localhost:8080/mythicalmunchies/reviews/:id
router.delete('/:review_id', async (req, res, next) => {
	if (!req.user) {
		res.status(401);
		// console.log('made it to not user');
		next({
			name: 'MissingUserError',
			message: 'You must be logged in to perform this action',
		});
	} else {
  try {
		res.send(await deleteReview(req.params.id));
	} catch (ex) {
		next(ex);
	}
}
});

//Fetch all of a single user's recipes (reviews)
//http://localhost:8080/mythicalmunchies/reviews/user/:user_id
router.get('/user/:user_id', async (req, res, next) => {
	try {
		res.send(await fetchUserReviews(req.params.user_id));
	} catch (ex) {
		next(ex);
	}
});

//Fetch single recipe's reviews
//http://localhost:8080/mythicalmunchies/reviews/recipe/:recipe_id
router.get('/recipe/:recipe_id', async (req, res, next) => {
	try {
		res.send(await fetchRecipeReviews(req.params.recipe_id));
	} catch (ex) {
		next(ex);
	}
});

module.exports = router;
