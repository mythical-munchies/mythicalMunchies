const express = require('express');
const router = express.Router();
const fetchUsers = require('../db/users');

// const {authenticate, findUserWithToken, getRecipes} = require('./db')

router.get('/', async(req, res, next)=> {
  try {
    const users = await fetchUsers()
    res.send({users});
  } catch (ex) {
    next (ex)
  }
});

router.post('/login', async (req, res, next) => {
  
});

router.post('/signup', async (req, res, next) => {
  
});

module.exports = router