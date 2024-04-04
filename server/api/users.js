const express = require('express');
const router = express.Router();

// const {authenticate, findUserWithToken, getRecipes} = require('./db')

router.get('/', async(req, res, next)=> {
  try {
    const users = await fetchAllUsers()
    res.send({users});
  } catch (ex) {
    next (ex)
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const token = await authenticate(req.body)
    const user = await findUserWithToken(token)
    const recipes = await getRecipes(user.id)
    const returnObj = {
      token,
      user,
      recipes
    }
    res.send(returnObj)
  } catch (ex) {
    next (ex)
  }
});

router.post('/register', async (req, res, next) => {
  try {
    await createUser(req.body)
    const token = await authenticate(req.body)
    const user = await findUserWithToken(token)
    const recipes = await getRecipes(user.id)
    const returnObj = {
      token,
      user,
      recipes
    }
    res.send(returnObj)
  }
  catch (ex) {
    next (ex)
  }
});

module.exports = router