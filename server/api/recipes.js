const express = require('express');
const router = express.Router();
import { fetchAllRecipes, fetchWorldRecipes, fetchRecipe } from '../db/recipes';
// const {fetchRecipes, fetchRecipe, createRecipe} = require('./db')

router.get('/', async(req, res, next)=> {
  try {
    res.send(await fetchAllRecipes(req.params.id));
  } catch (ex) {
    next (ex)
  }
});

router.get('/:world_id', async(req, res, next)=> {
  try {
    res.send(await fetchWorldRecipes(req.params.id));
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