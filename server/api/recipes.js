const express = require('express');
const router = express.Router();

// const {fetchRecipes, fetchRecipe, createRecipe} = require('./db')

router.get('/', async(req, res, next)=> {
  try {
    res.send(await fetchRecipes(req.params.id));
  } catch (ex) {
    next (ex)
  }
});

router.get('/:id', async(req, res, next)=> {
  try {
    res.send(await fetchRecipe(req.params.id));
  } catch (ex) {
    next (ex)
  }
});


module.exports = router