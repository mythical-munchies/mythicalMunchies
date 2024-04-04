const express = require('express');
const router = express.Router();

router.get('/', async(req, res, next)=> {
  try {
    res.send(await fetchWorlds());
  }
  catch(ex){
    next(ex);
  }
});

module.exports = router