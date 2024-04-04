const express = require('express');
const router = express.Router();

router.get('/:id/recipes', async(req, res, next)=> {
  try {
    res.send(await fetchRecipes(req.params.id));
  }
  catch(ex){
    next(ex);
  }
});

module.exports = router